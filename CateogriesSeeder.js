const mongoose = require("mongoose");
const categories = require("./models/categoryModel"); // Adjust path as needed

// MongoDB URI
const MONGODB_URI = "mongodb+srv://shivesingh:shiva123@shiva.fgswq.mongodb.net/HealthyBasket";

// Sample product

 const Categories = [
    {
      "_id": "63bfdce2d5544d4228d5f655",
      "categoryName": "Vegetables",
      "categoryImage": "http://res.cloudinary.com/dzkexyp4x/image/upload/v1687324187/category/kvyy8eo3wrklfwt28piy.jpg",
      "__v": 0
    },
    {
      "_id": "63bfde192260c619ec1c2f33",
      "categoryName": "Fruits",
      "categoryImage": "http://res.cloudinary.com/dzkexyp4x/image/upload/v1687324348/category/fstnyreq5dccw8oi5sxs.jpg",
      "__v": 0
    },
    {
      "_id": "63bfdec3d8f52900b19bff0d",
      "categoryName": "Dairy",
      "categoryImage": "http://res.cloudinary.com/dzkexyp4x/image/upload/v1687324361/category/ne6nisrzksbifseaz703.jpg",
      "__v": 0
    }
  ]
  


//     name: "Fresh Apples",
//     rate: 120,
//     public_id: "apple_001",
//     url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC7Bjn-UNg7GDoEcObPlsNpZJoefPCPe2J7A&s",
//     category: new mongoose.Types.ObjectId("66176c75e884f9b5fadc6804"),
//     stocks: 100,
//     kilogramOption: [0.5, 1, 2],
//   },
//   {
//     name: "Bananas",
//     rate: 60,
//     public_id: "banana_001",
//     url: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg",
//     category: new mongoose.Types.ObjectId("66176c75e884f9b5fadc6804"),
//     stocks: 150,
//     kilogramOption: [1, 2],
//   },
//   {
//     name: "Oranges",
//     rate: 80,
//     public_id: "orange_001",
//     url: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg",
//     category: new mongoose.Types.ObjectId("66176c75e884f9b5fadc6804"),
//     stocks: 120,
//     kilogramOption: [1],
//   },
//   {
//     name: "Grapes",
//     rate: 90,
//     public_id: "grapes_001",
//     url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7fp7zOAJf9xLW0BlC4GFJxu_4iOSXWPT-fA&s",
//     category: new mongoose.Types.ObjectId("66176c75e884f9b5fadc6804"),
//     stocks: 80,
//     kilogramOption: [0.5, 1],
//   },
//   {
//     name: "Mangoes",
//     rate: 150,
//     public_id: "mango_001",
//     url: "https://upload.wikimedia.org/wikipedia/commons/9/90/Hapus_Mango.jpg",
//     category: new mongoose.Types.ObjectId("66176c75e884f9b5fadc6804"),
//     stocks: 70,
//     kilogramOption: [1, 2],
//   },
//   {
//     name: "Pineapples",
//     rate: 100,
//     public_id: "pineapple_001",
//     url: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Pineapple_and_cross_section.jpg",
//     category: new mongoose.Types.ObjectId("66176c75e884f9b5fadc6804"),
//     stocks: 60,
//     kilogramOption: [1],
//   },
//   {
//     name: "Pomegranates",
//     rate: 130,
//     public_id: "pomegranate_001",
//     url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9_G9NQaGP4A5K9yIFkXsXLvQx67O0rOFXew&s",
//     category: new mongoose.Types.ObjectId("66176c75e884f9b5fadc6804"),
//     stocks: 90,
//     kilogramOption: [1],
//   },
//   {
//     name: "Papayas",
//     rate: 85,
//     public_id: "papaya_001",
//     url: "https://www.shutterstock.com/image-photo/whole-half-ripe-papaya-fruit-260nw-737284537.jpg",
//     category: new mongoose.Types.ObjectId("66176c75e884f9b5fadc6804"),
//     stocks: 55,
//     kilogramOption: [1, 2],
//   },
//   {
//     name: "Strawberries",
//     rate: 200,
//     public_id: "strawberry_001",
//     url: "https://upload.wikimedia.org/wikipedia/commons/2/29/PerfectStrawberry.jpg",
//     category: new mongoose.Types.ObjectId("66176c75e884f9b5fadc6804"),
//     stocks: 40,
//     kilogramOption: [0.25, 0.5],
//   },
//   {
//     name: "Watermelons",
//     rate: 30,
//     public_id: "watermelon_001",
//     url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSidYOMX8-X1JtKEPCeUEHUaP4-8EF0vcXpHQ&s",
//     category: new mongoose.Types.ObjectId("66176c75e884f9b5fadc6804"),
//     stocks: 75,
//     kilogramOption: [1, 2],
//   },
// ];



//   {
//     firstName: "Aarav",
//     lastName: "Sharma",
//     role: "User",
//     email: "aarav.sharma@example.com",
//     password: "pass1234"
//   },
//   {
//     firstName: "Meera",
//     lastName: "Patel",
//     role: "Admin",
//     email: "meera.patel@example.com",
//     password: "admin456"
//   },
//   {
//     firstName: "Kabir",
//     lastName: "Verma",
//     role: "User",
//     email: "kabir.verma@example.com",
//     password: "kabir789"
//   },
//   {
//     firstName: "Ananya",
//     lastName: "Singh",
//     role: "User",
//     email: "ananya.singh@example.com",
//     password: "ananya321"
//   },
//   {
//     firstName: "Rohan",
//     lastName: "Gupta",
//     role: "User",
//     email: "rohan.gupta@example.com",
//     password: "rohan456"
//   },
//   {
//     firstName: "Diya",
//     lastName: "Jain",
//     role: "User",
//     email: "diya.jain@example.com",
//     password: "diya890"
//   },
//   {
//     firstName: "Aryan",
//     lastName: "Mehta",
//     role: "User",
//     email: "aryan.mehta@example.com",
//     password: "aryan123"
//   },
//   {
//     firstName: "Riya",
//     lastName: "Kapoor",
//     role: "User",
//     email: "riya.kapoor@example.com",
//     password: "riya567"
//   },
//   {
//     firstName: "Vivaan",
//     lastName: "Malhotra",
//     role: "User",
//     email: "vivaan.malhotra@example.com",
//     password: "vivaan890"
//   },
//   {
//     firstName: "Ishita",
//     lastName: "Chopra",
//     role: "User",
//     email: "ishita.chopra@example.com",
//     password: "ishita123"
//   }
// ];


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
    await categories.deleteMany({});
    console.log("🗑️ Existing products removed");

    // Insert new products
    await categories.insertMany(Categories);
    console.log("🌱 Sample products inserted");

    await mongoose.disconnect();
    console.log("🔌 MongoDB Disconnected");
  } catch (err) {
    console.error("❌ Error seeding database:", err);
  }
}

seedDatabase();
