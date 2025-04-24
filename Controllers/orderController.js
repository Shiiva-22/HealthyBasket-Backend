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

    const newOrder = await orderModel.create({
      user: userId,
      shippingInfo,
      total,
    });

    newOrder.orderItems = cartItems;
    await updateStock(cartItems);
    await newOrder.save();

    res.status(200).json({
      success: true,
      newOrder,
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
      const product = await productModel.findById(item.id);
      if (!product) {
        throw new Error(`Product with ID ${item.id} not found`);
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

    const order = await orderModel.findById(orderId);

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
    const OrdersCount = await orderModel.countDocuments();
    const AllOrders = await orderModel
      .find()
      .sort({ _id: -1 })
      .populate("user");

    res.status(200).json({
      success: true,
      AllOrders,
      OrdersCount,
      message: "All orders retrieved successfully",
    });
  } catch (error) {
    console.error("Admin Get All Orders Error:", error);
    sendError(res, 400, "Something went wrong while fetching all orders");
  }
};

// Admin: Update order status
const AdminUpdateOrder = async (req, res) => {
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
  AdminUpdateOrder,
};
