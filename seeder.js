const mongoose = require("mongoose");
const Product = require("./models/productModel"); // Adjust path as needed

// MongoDB URI
const MONGODB_URI = "mongodb+srv://shivesingh:shiva123@shiva.fgswq.mongodb.net/HealthyBasket";

// Sample product

const productData = [
  {
    name: "Fresh Tomatoes",
    rate: 30,
    public_id: "tomato_001",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/1200px-Tomato_je.jpg",
    category: new mongoose.Types.ObjectId("66176c75e884f9b5fadc6801"),
    stocks: 100,
    kilogramOption: [0.5, 1, 2],
  },
  {
    name: "Organic Potatoes",
    rate: 25,
    public_id: "potato_001",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm5Qmb05F0PDAwXVxSUZmyYQGffzjfEZ0Mgw&s",
    category: new mongoose.Types.ObjectId("66176c75e884f9b5fadc6801"),
    stocks: 150,
    kilogramOption: [1, 2],
  },
  {
    name: "Green Spinach",
    rate: 15,
    public_id: "spinach_001",
    url: "https://png.pngtree.com/background/20220720/original/pngtree-fresh-spinach-on-a-white-background-picture-image_1673684.jpg",
    category: new mongoose.Types.ObjectId("66176c75e884f9b5fadc6802"),
    stocks: 60,
    kilogramOption: [0.5, 1],
  },
  {
    name: "Carrots",
    rate: 40,
    public_id: "carrot_001",
    url: "https://thumbs.dreamstime.com/b/heap-carrots-vegetable-isolated-white-background-56270529.jpg",
    category: new mongoose.Types.ObjectId("66176c75e884f9b5fadc6801"),
    stocks: 80,
    kilogramOption: [1],
  },
  {
    name: "Red Onions",
    rate: 35,
    public_id: "onion_001",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrMKrBvrMd59LzxwzLPWDdaW0LFoqWM6R-kw&s",
    category: new mongoose.Types.ObjectId("66176c75e884f9b5fadc6801"),
    stocks: 120,
    kilogramOption: [0.5, 1, 2],
  },
  {
    name: "Broccoli",
    rate: 60,
    public_id: "broccoli_001",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSwKgOQyR8JoY7i24uKQjy0IeV0hGpn7WqLw&s",
    category: new mongoose.Types.ObjectId("66176c75e884f9b5fadc6802"),
    stocks: 50,
    kilogramOption: [0.5],
  },
    {
      name: "Full Cream Milk",
      rate: 60,
      public_id: "milk_001",
      url: "https://www.shutterstock.com/image-photo/dairy-products-on-white-background-600nw-577182346.jpg",
      category: new mongoose.Types.ObjectId("66176c75e884f9b5fadc6805"),
      stocks: 200,
      kilogramOption: [0.5, 1],
    },
    {
      name: "Fresh Curd",
      rate: 70,
      public_id: "curd_001",
      url: "https://www.shutterstock.com/image-photo/sour-cream-wooden-bowl-spoon-600nw-1660349047.jpg",
      category: new mongoose.Types.ObjectId("66176c75e884f9b5fadc6805"),
      stocks: 150,
      kilogramOption: [0.5, 1],
    },
    {
      name: "Paneer",
      rate: 300,
      public_id: "paneer_001",
      url: "https://www.shutterstock.com/image-photo/piece-cheese-paneer-isolated-on-260nw-195341264.jpg",
      category: new mongoose.Types.ObjectId("66176c75e884f9b5fadc6805"),
      stocks: 80,
      kilogramOption: [0.25, 0.5],
    },
    {
      name: "Cheddar Cheese",
      rate: 450,
      public_id: "cheese_001",
      url: "https://www.shutterstock.com/image-photo/bread-toast-sandwich-maasdam-cheese-600nw-2281408709.jpg",
      category: new mongoose.Types.ObjectId("66176c75e884f9b5fadc6805"),
      stocks: 60,
      kilogramOption: [0.25, 0.5],
    },
    {
      name: "Butter",
      rate: 400,
      public_id: "butter_001",
      url: "https://img.freepik.com/premium-photo/bowl-butter-is-shown-white-background_890183-2178.jpg",
      category: new mongoose.Types.ObjectId("66176c75e884f9b5fadc6805"),
      stocks: 100,
      kilogramOption: [0.25, 0.5],
    },
    {
      name: "Ghee",
      rate: 600,
      public_id: "ghee_001",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3GrtRc99t2oWahAD57CbFIBPFp6OCmN6GaZM3fSDna6HSe8QS-2GpEeZtLzH4b_mLxwM&usqp=CAU",
      category: new mongoose.Types.ObjectId("66176c75e884f9b5fadc6805"),
      stocks: 70,
      kilogramOption: [0.25, 0.5, 1],
    },
    {
      name: "Flavored Yogurt",
      rate: 90,
      public_id: "yogurt_001",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs8RvlojToN3pojyD3QWiUEvR7kQq1ELWcNQ&s",
      category: new mongoose.Types.ObjectId("66176c75e884f9b5fadc6805"),
      stocks: 50,
      kilogramOption: [0.25, 0.5],
    },
    {
      name: "Cream",
      rate: 250,
      public_id: "cream_001",
      url: "https://media.istockphoto.com/id/1135483731/photo/sour-cream-or-yogurt-in-wooden-bowl.jpg?s=612x612&w=0&k=20&c=9CZ2DyG-3ZWeu-4802fbWGOIGVgt47CIlGCslMU8MxM=",
      category: new mongoose.Types.ObjectId("66176c75e884f9b5fadc6805"),
      stocks: 40,
      kilogramOption: [0.25, 0.5],
    },
    {
      name: "Processed Cheese Slices",
      rate: 500,
      public_id: "cheeseslice_001",
      url: "https://media.istockphoto.com/id/955548928/photo/slices-of-processed-american-cheese-on-white-background.jpg?s=612x612&w=0&k=20&c=U14jWVGS-8dLEdAumBLq402bdq_hcB-pDdOHtpiozus=",
      category: new mongoose.Types.ObjectId("66176c75e884f9b5fadc6805"),
      stocks: 90,
      kilogramOption: [0.25, 0.5],
    },
    {
      name: "Milk Powder",
      rate: 450,
      public_id: "milkpowder_001",
      url: "https://www.kroger.com/product/images/large/front/0379188412241",
      category: new mongoose.Types.ObjectId("66176c75e884f9b5fadc6805"),
      stocks: 60,
      kilogramOption: [0.5, 1],
    },
  
  
  {
    name: "Cauliflower",
    rate: 50,
    public_id: "cauliflower_001",
    url: "https://www.shutterstock.com/image-photo/highquality-png-cauliflower-isolated-on-600nw-2552721063.jpg",
    category: new mongoose.Types.ObjectId("66176c75e884f9b5fadc6802"),
    stocks: 70,
    kilogramOption: [1],
  },
  {
    name: "Green Beans",
    rate: 55,
    public_id: "beans_001",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhSpKIFAYQoI-lOaaUXYh685Iiz3EWT2ys1g&s",
    category: new mongoose.Types.ObjectId("66176c75e884f9b5fadc6802"),
    stocks: 90,
    kilogramOption: [1],
  },
  {
    name: "Sweet Corn",
    rate: 70,
    public_id: "corn_001",
    url: "https://static.vecteezy.com/system/resources/previews/003/159/354/large_2x/sweet-corn-isolated-on-a-white-background-free-photo.jpeg",
    category: new mongoose.Types.ObjectId("66176c75e884f9b5fadc6802"),
    stocks: 60,
    kilogramOption: [0.5, 1],
  },
  {
    name: "Bell Peppers",
    rate: 80,
    public_id: "peppers_001",
    url: "https://www.shutterstock.com/image-photo/fresh-vegetables-three-sweet-red-260nw-270503105.jpg",
    category: new mongoose.Types.ObjectId("66176c75e884f9b5fadc6801"),
    stocks: 45,
    kilogramOption: [1],
  },
  {
    name: "Cucumber",
    rate: 25,
    public_id: "cucumber_001",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxvYy_KtnBNvvg8DlHHgc5e-MDaW49bpgvTw&s",
    category: new mongoose.Types.ObjectId("66176c75e884f9b5fadc6801"),
    stocks: 110,
    kilogramOption: [1],
  },
  {
    name: "Zucchini",
    rate: 45,
    public_id: "zucchini_001",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsUv7-yN_qwLzfZPEnN42iBxpbe9dNNGDHJQ&s",
    category: new mongoose.Types.ObjectId("66176c75e884f9b5fadc6801"),
    stocks: 55,
    kilogramOption: [0.5, 1],
  },
  {
    name: "Mushrooms",
    rate: 90,
    public_id: "mushroom_001",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF_dMKKMsX1yNIg00M2X58XF_Ne3K7G1_szQ&s",
    category: new mongoose.Types.ObjectId("66176c75e884f9b5fadc6803"),
    stocks: 40,
    kilogramOption: [0.25, 0.5],
  },
  {
    name: "Ginger",
    rate: 120,
    public_id: "ginger_001",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoV7kTGWF0LYIWP7S55s2mt7TTAG-G6_Go4g&s",
    category: new mongoose.Types.ObjectId("66176c75e884f9b5fadc6803"),
    stocks: 30,
    kilogramOption: [0.25],
  },
  {
    name: "Garlic",
    rate: 110,
    public_id: "garlic_001",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ6u4QN7jQe94zJn2YQIgu4X4f-kD0sZPL6w&s",
    category: new mongoose.Types.ObjectId("66176c75e884f9b5fadc6803"),
    stocks: 50,
    kilogramOption: [0.25, 0.5],
  },
    {
      name: "Fresh Apples",
      rate: 120,
      public_id: "apple_001",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC7Bjn-UNg7GDoEcObPlsNpZJoefPCPe2J7A&s",
      category: new mongoose.Types.ObjectId("66176c75e884f9b5fadc6804"),
      stocks: 100,
      kilogramOption: [0.5, 1, 2],
    },
    {
      name: "Bananas",
      rate: 60,
      public_id: "banana_001",
      url: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg",
      category: new mongoose.Types.ObjectId("66176c75e884f9b5fadc6804"),
      stocks: 150,
      kilogramOption: [1, 2],
    },
    {
      name: "Oranges",
      rate: 80,
      public_id: "orange_001",
      url: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg",
      category: new mongoose.Types.ObjectId("66176c75e884f9b5fadc6804"),
      stocks: 120,
      kilogramOption: [1],
    },
    {
      name: "Grapes",
      rate: 90,
      public_id: "grapes_001",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7fp7zOAJf9xLW0BlC4GFJxu_4iOSXWPT-fA&s",
      category: new mongoose.Types.ObjectId("66176c75e884f9b5fadc6804"),
      stocks: 80,
      kilogramOption: [0.5, 1],
    },
    {
      name: "Mangoes",
      rate: 150,
      public_id: "mango_001",
      url: "https://upload.wikimedia.org/wikipedia/commons/9/90/Hapus_Mango.jpg",
      category: new mongoose.Types.ObjectId("66176c75e884f9b5fadc6804"),
      stocks: 70,
      kilogramOption: [1, 2],
    },
    {
      name: "Pineapples",
      rate: 100,
      public_id: "pineapple_001",
      url: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Pineapple_and_cross_section.jpg",
      category: new mongoose.Types.ObjectId("66176c75e884f9b5fadc6804"),
      stocks: 60,
      kilogramOption: [1],
    },
    {
      name: "Pomegranates",
      rate: 130,
      public_id: "pomegranate_001",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9_G9NQaGP4A5K9yIFkXsXLvQx67O0rOFXew&s",
      category: new mongoose.Types.ObjectId("66176c75e884f9b5fadc6804"),
      stocks: 90,
      kilogramOption: [1],
    },
    {
      name: "Papayas",
      rate: 85,
      public_id: "papaya_001",
      url: "https://www.shutterstock.com/image-photo/whole-half-ripe-papaya-fruit-260nw-737284537.jpg",
      category: new mongoose.Types.ObjectId("66176c75e884f9b5fadc6804"),
      stocks: 55,
      kilogramOption: [1, 2],
    },
    {
      name: "Strawberries",
      rate: 200,
      public_id: "strawberry_001",
      url: "https://upload.wikimedia.org/wikipedia/commons/2/29/PerfectStrawberry.jpg",
      category: new mongoose.Types.ObjectId("66176c75e884f9b5fadc6804"),
      stocks: 40,
      kilogramOption: [0.25, 0.5],
    },
    {
      name: "Watermelons",
      rate: 30,
      public_id: "watermelon_001",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSidYOMX8-X1JtKEPCeUEHUaP4-8EF0vcXpHQ&s",
      category: new mongoose.Types.ObjectId("66176c75e884f9b5fadc6804"),
      stocks: 75,
      kilogramOption: [1, 2],
    },
  
];


//   {
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
    await Product.deleteMany({});
    console.log("🗑️ Existing products removed");

    // Insert new products
    await Product.insertMany(productData);
    console.log("🌱 Sample products inserted");

    await mongoose.disconnect();
    console.log("🔌 MongoDB Disconnected");
  } catch (err) {
    console.error("❌ Error seeding database:", err);
  }
}

seedDatabase();
