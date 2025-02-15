import React, { useState } from 'react';
import axios from 'axios';

const AddProductPage = () => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    minQuantity: "" // ✅ Changed from minBulkQuantity to match backend
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = {
      name: form.name,
      price: form.price,
      minQuantity: form.minQuantity // ✅ Using correct form values
    };

    console.log("Sending data:", productData); // ✅ Debug log

    try {
      const response = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData)
      });

      const result = await response.json();
      console.log("Response:", result);
      
      if (response.ok) {
        alert("Product added successfully!");
        setForm({ name: "", price: "", minQuantity: "" }); // ✅ Reset form
      } else {
        alert("Error: " + result.error);
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div>
      <h1>Add a New Product</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Product Name" 
          value={form.name} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="number" 
          name="price" 
          placeholder="Price" 
          value={form.price} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="number" 
          name="minQuantity"  // ✅ Changed name to match backend
          placeholder="Min Bulk Quantity" 
          value={form.minQuantity} 
          onChange={handleChange} 
          required 
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProductPage;

