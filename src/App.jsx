import { useState } from "react";
import productsData from "./data/products";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";

export default function App() {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState("products");

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const checkout = () => {
    setCart([]);
  };

  return (
    <div>
      <Navbar cartCount={cart.length} />
      <Banner />

      <div className="flex gap-4 justify-center my-5">
        <button onClick={() => setView("products")}>Products</button>
        <button onClick={() => setView("cart")}>Cart</button>
      </div>

      {view === "products" && (
        <div className="grid md:grid-cols-3 gap-5">
          {productsData.map(p => (
            <ProductCard
              key={p.id}
              product={p}
              addToCart={addToCart}
              cart={cart}
            />
          ))}
        </div>
      )}

      {view === "cart" && (
        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
          checkout={checkout}
        />
      )}
    </div>
  );
}