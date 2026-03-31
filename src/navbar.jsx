export default function Navbar({ cartCount }) {
  return (
    <div className="flex justify-between items-center p-5">
      <h1 className="text-2xl font-bold text-purple-600">DigiTools</h1>
      <p>Cart ({cartCount})</p>
    </div>
  );
}