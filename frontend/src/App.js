import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import ProductPage from "./pages/ProductPage";
import AddProductPage from "./pages/AddProductPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/add-product" element={<AddProductPage />} />
      </Routes>
    </Router>
  );
};

export default App;

