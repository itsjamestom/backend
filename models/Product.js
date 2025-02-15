const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    minQuantity: { type: Number, required: true } // ✅ Ensure it's defined correctly
});

module.exports = mongoose.model("Product", ProductSchema);

