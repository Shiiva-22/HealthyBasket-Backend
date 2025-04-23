  const express = require("express");
  const cors = require("cors"); // ✅ Added
  const cloudinary = require("cloudinary");
  const expressFileUpload = require("express-fileupload");
  const path = require("path");
  const bodyParser = require("body-parser");
  const cookieParser = require("cookie-parser");

  const connectDB = require("./Config/connection");
  const userRoutes = require("./routes/userRoute");
  const productRoute = require("./routes/productRoute");
  const categoryRoute = require("./routes/categoryRoute");

  require("dotenv").config({ path: path.resolve(__dirname, "./.env") });

  const app = express();

  // Body Parser
  app.use(bodyParser.urlencoded({ limit: "200mb", extended: true }));
  app.use(express.json());

  // Cookie Parser
  app.use(cookieParser());

  // CORS Config ✅
  app.use(
    cors({
      origin: "https://healthybasket-frontend.onrender.com",
      credentials: true,
    })
  );

  // File Upload
  app.use(expressFileUpload());

  // Connect Database
  connectDB();

  // Cloudinary Config
  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET_KEY,
  });

  // Routes
  app.use("/api/user", userRoutes);
  app.use("/api/product", productRoute);
  app.use("/api/category", categoryRoute);

  // Listen
  app.listen(process.env.PORT || 5000, () => {
    console.log(`Server Running on port ${process.env.PORT}`);
  });
