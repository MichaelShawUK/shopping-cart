import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import App from "./App";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Nav from "./components/Nav";
import Product from "./components/Product";

import products from "./data/products";

const RouteSwitch = () => {
  const [purchases, setPurchases] = useState([]);
  const [order, setOrder] = useState([]);

  function addItemToCart(e) {
    setPurchases(purchases.concat(e.target.dataset.id));
  }

  function createOrder(purchases) {
    const counts = {};
    purchases.forEach((id) => (counts[id] = 1 + counts[id] || 1));
    const orderItems = [];
    for (const [id, count] of Object.entries(counts)) {
      const item = products.find((product) => product.id === id);
      orderItems.push({
        id,
        name: item.name,
        quantity: count,
        price: item.price,
        img: item.displayImg,
      });
    }
    setOrder(orderItems);
  }

  useEffect(() => {
    createOrder(purchases);
  }, [purchases]);

  return (
    <BrowserRouter>
      <Nav itemCount={purchases.length} />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart order={order} />} />
        <Route path="/shop/:id" element={<Product onClick={addItemToCart} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
