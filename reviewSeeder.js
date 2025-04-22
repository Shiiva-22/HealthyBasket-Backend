
  const mongoose = require("mongoose");
  const Product = require("./models/reviewsModel"); // Adjust path as needed
  
  // MongoDB URI
  const MONGODB_URI = "mongodb+srv://shivesingh:shiva123@shiva.fgswq.mongodb.net/HealthyBasket";
  
  // Sample product
  const reviewData = [
        {
          _id: "661e8f02b1d0f9a73c10a007",
          user: {
            firstName: "Ankit",
            lastName: "Mehra",
          },
          comment: "Loved the user interface, very easy to order!",
          ratings: 5,
        },
        {
          _id: "661e8f02b1d0f9a73c10a008",
          user: {
            firstName: "Riya",
            lastName: "Malhotra",
          },
          comment: "Could improve packaging, but products were fresh.",
          ratings: 4,
        },
        {
          _id: "661e8f02b1d0f9a73c10a009",
          user: {
            firstName: "Vikram",
            lastName: "Deshmukh",
          },
          comment: "Prompt delivery and quality as promised.",
          ratings: 5,
        },
        {
          _id: "661e8f02b1d0f9a73c10a010",
          user: {
            firstName: "Preeti",
            lastName: "Kaur",
          },
          comment: "Customer service was very helpful.",
          ratings: 4,
        },
        {
          _id: "661e8f02b1d0f9a73c10a011",
          user: {
            firstName: "Arjun",
            lastName: "Sethi",
          },
          comment: "Not happy with the vegetable quality this time.",
          ratings: 2,
        },
      
      
    {
      _id: "661e8f02b1d0f9a73c10a001",
      user: {
        firstName: "Aman",
        lastName: "Sharma",
      },
      comment: "Great quality products, very fresh and clean packaging!",
      ratings: 5,
    },
    {
      _id: "661e8f02b1d0f9a73c10a002",
      user: {
        firstName: "Sneha",
        lastName: "Verma",
      },
      comment: "Good service but delivery was slightly delayed.",
      ratings: 4,
    },
    {
      _id: "661e8f02b1d0f9a73c10a003",
      user: {
        firstName: "Rohit",
        lastName: "Patel",
      },
      comment: "Excellent fruits, especially the apples!",
      ratings: 5,
    },
    {
      _id: "661e8f02b1d0f9a73c10a004",
      user: {
        firstName: "Neha",
        lastName: "Singh",
      },
      comment: "Average quality vegetables this time.",
      ratings: 3,
    },
    {
      _id: "661e8f02b1d0f9a73c10a005",
      user: {
        firstName: "Kunal",
        lastName: "Bansal",
      },
      comment: "Very satisfied with the dairy products.",
      ratings: 5,
    },
    {
      _id: "661e8f02b1d0f9a73c10a006",
      user: {
        firstName: "Pooja",
        lastName: "Chauhan",
      },
      comment: "Nice variety of products and reasonable prices.",
      ratings: 4,
    },
  ];
  
 

 
  // Seeding function
  async function seedDatabase() {
    try {
      await mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: "HealthyBasket"
      });
  
      console.log("✅ MongoDB Connected");
  
      // Optional: clear old data
      await Product.deleteMany({});
      console.log("🗑️ Existing products removed");
  
      // Insert new products
      await Product.insertMany(reviewData);
      console.log("🌱 Sample products inserted");
  
      await mongoose.disconnect();
      console.log("🔌 MongoDB Disconnected");
    } catch (err) {
      console.error("❌ Error seeding database:", err);
    }
  }
  
  seedDatabase();
  