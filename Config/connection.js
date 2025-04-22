const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    debugger
    // console.log('URI',process.env.MONGODB_URI)
    await mongoose.connect(`mongodb+srv://shivesingh:shiva123@shiva.fgswq.mongodb.net/HealthyBasket`);
    console.log("App Is Connected To Database Successfully...!!");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
