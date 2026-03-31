export default function ProductCard({ product, addToCart, cart }) {
  return (
    <div className="border p-5 rounded shadow">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>

      <button onClick={() => addToCart(product)}>
        {cart.find(item => item.id === product.id) ? "Added" : "Buy Now"}
      </button>
    </div>
  );
}