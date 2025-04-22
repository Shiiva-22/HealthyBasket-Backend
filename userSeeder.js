
  const mongoose = require("mongoose");
  const users = require("./models/userModel"); // Adjust path as needed
  
  const MONGODB_URI = "mongodb+srv://shivesingh:shiva123@shiva.fgswq.mongodb.net/HealthyBasket";
  
  
  const usersdata = [
    {
      firstName: "Aarav",
      lastName: "Sharma",
      role: "User",
      email: "aarav.sharma@example.com",
      password: "pass1234"
    },
    {
      firstName: "Meera",
      lastName: "Patel",
      role: "Admin",
      email: "meera.patel@example.com",
      password: "admin456"
    },
    {
      firstName: "Kabir",
      lastName: "Verma",
      role: "User",
      email: "kabir.verma@example.com",
      password: "kabir789"
    },
    {
      firstName: "Ananya",
      lastName: "Singh",
      role: "User",
      email: "ananya.singh@example.com",
      password: "ananya321"
    },
    {
      firstName: "Rohan",
      lastName: "Gupta",
      role: "User",
      email: "rohan.gupta@example.com",
      password: "rohan456"
    },
    {
      firstName: "Diya",
      lastName: "Jain",
      role: "User",
      email: "diya.jain@example.com",
      password: "diya890"
    },
    {
      firstName: "Aryan",
      lastName: "Mehta",
      role: "User",
      email: "aryan.mehta@example.com",
      password: "aryan123"
    },
    {
      firstName: "Riya",
      lastName: "Kapoor",
      role: "User",
      email: "riya.kapoor@example.com",
      password: "riya567"
    },
    {
      firstName: "Vivaan",
      lastName: "Malhotra",
      role: "User",
      email: "vivaan.malhotra@example.com",
      password: "vivaan890"
    },
    {
      firstName: "Ishita",
      lastName: "Chopra",
      role: "User",
      email: "ishita.chopra@example.com",
      password: "ishita123"
    }
  ];
  async function seedDatabase() {
    try {
      await mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
  
      console.log("✅ MongoDB Connected");
  
      await users.deleteMany({});
      console.log("🗑️ Existing users removed");
  
      await users.insertMany(usersdata);
      console.log("🌱 Sample users inserted");
  
      await mongoose.disconnect();
      console.log("🔌 MongoDB Disconnected");
    } catch (err) {
      console.error("❌ Error seeding database:", err);
    }
  }
  
  seedDatabase();
  