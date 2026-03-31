export default function Cart({ cart, removeFromCart, checkout }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id}>
              {item.name} - ${item.price}
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <h3>Total: ${total}</h3>
          <button onClick={checkout}>Checkout</button>
        </>
      )}
    </div>
  );
}