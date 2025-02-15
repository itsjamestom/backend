const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/myDatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Database connection error:", err));

// Define Product Schema & Model
const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  minQuantity: Number, // ✅ Ensure consistency across backend & frontend
  description: { type: String, default: "No description available" }
});

const Product = mongoose.model("Product", ProductSchema);

// ✅ Get all products
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Add a new product
app.post("/products", async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(3000, () => console.log("Server running on port 3000"));

