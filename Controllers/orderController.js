const productModel = require("../models/productModel");
const orderModel = require("../models/orderModel");
const sendError = require("../utils/sendError");

// Create new order
const newOrder = async (req, res) => {
  try {
    const { cartItems, shippingInfo, userId, total } = req.body;

    if (!cartItems || !shippingInfo || !userId || !total) {
      return sendError(res, 400, "Missing required order fields");
    }

    // Create order with cart items directly
    const order = await orderModel.create({
      user: userId,
      shippingInfo,
      total,
      orderItems: cartItems,
    });

    // Update product stock after order is saved
    await updateStock(cartItems);

    res.status(200).json({
      success: true,
      newOrder: order,
    });
  } catch (error) {
    console.error("Order Creation Error:", error);
    sendError(res, 400, error.message || "Failed to create new order");
  }
};

// Update stock
const updateStock = async (cartItems) => {
  await Promise.all(
    cartItems.map(async (item) => {
      const product = await productModel.findById(item.id); // Make sure `item.id` is correct
      if (!product) {
        throw new Error(`Product with ID ${item.id} not found`);
      }

      if (item.quantity <= 0) {
        throw new Error(`Invalid quantity for product ${product.name}`);
      }

      product.stocks -= item.quantity;

      if (product.stocks < 0) {
        throw new Error(`Insufficient stock for ${product.name}`);
      }

      await product.save();
    })
  );
};

// Get user's orders
const getMyOrders = async (req, res) => {
  try {
    const userId = req.user._id;

    if (!userId) {
      return sendError(res, 400, "Invalid user ID");
    }

    const orders = await orderModel.find({ user: userId }).sort({ _id: -1 });

    res.status(200).json({
      success: true,
      message: "Orders retrieved successfully",
      myOrders: orders,
    });
  } catch (error) {
    console.error("Fetching Orders Error:", error);
    sendError(res, 400, "Something went wrong while fetching orders");
  }
};

// Get order details by ID
const getOrderDetails = async (req, res) => {
  try {
    const { orderId } = req.params;

    if (!orderId) {
      return sendError(res, 400, "Invalid order ID");
    }

    const order = await orderModel.findById(orderId).populate("user"); // Populate if user info is needed

    if (!order) {
      return sendError(res, 404, "Order not found");
    }

    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    console.error("Get Order Details Error:", error);
    sendError(res, 400, "Something went wrong while retrieving order");
  }
};

// Admin: Get all orders
const adminAllOrders = async (req, res) => {
  try {
    const ordersCount = await orderModel.countDocuments();
    const allOrders = await orderModel
      .find()
      .sort({ _id: -1 })
      .populate("user");

    res.status(200).json({
      success: true,
      allOrders,
      ordersCount,
      message: "All orders retrieved successfully",
    });
  } catch (error) {
    console.error("Admin Get All Orders Error:", error);
    sendError(res, 400, "Something went wrong while fetching all orders");
  }
};

// Admin: Update order status
const adminUpdateOrder = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { oStatus } = req.body;

    if (!orderId || !oStatus) {
      return sendError(res, 400, "Order ID and status are required");
    }

    const updatedOrder = await orderModel.findById(orderId);

    if (!updatedOrder) {
      return sendError(res, 404, "Order not found");
    }

    updatedOrder.status = oStatus;
    await updatedOrder.save();

    res.status(200).json({
      success: true,
      message: "Order updated successfully",
      updatedOrder,
    });
  } catch (error) {
    console.error("Admin Update Order Error:", error);
    sendError(res, 400, "Something went wrong while updating order");
  }
};

module.exports = {
  newOrder,
  getMyOrders,
  getOrderDetails,
  adminAllOrders,
  adminUpdateOrder,
};
