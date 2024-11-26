import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header bg-gray-800 text-white px-4 py-2">
      <div className="flex items-center justify-between">
        <div className="logo text-xl font-bold">
          <Link to="/" className="text-yellow-300 hover:text-yellow-400">M&R Glam</Link>
        </div>
        <div className="search-bar flex-1 mx-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 rounded-lg bg-gray-200 text-gray-800"
          />
        </div>
        <div className="actions flex items-center space-x-4">
          <Link to="/profile" className="text-gray-300 hover:text-yellow-400">Profile</Link>
          <Link to="/cart" className="text-gray-300 hover:text-yellow-400">Cart</Link>
        </div>
      </div>
      <ul className="nav-links flex justify-around mt-4">
        <li>
          <Link to="/" className="text-gray-300 hover:text-orange-400">Home</Link>
        </li>
        <li>
          <Link to="/about" className="text-gray-300 hover:text-orange-400">About Us</Link>
        </li>
        <li>
          <Link to="/contact" className="text-gray-300 hover:text-orange-400">Contact</Link>
        </li>
        <li>
          <Link to="/deals" className="text-gray-300 hover:text-orange-400">Deals</Link>
        </li>
        <li>
          <Link to="/categories" className="text-gray-300 hover:text-orange-400">Categories</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
