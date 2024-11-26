import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <ul>
        <li className="text-orange-600">
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About us</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>

        <li className='text-red-600'>
          <Link to="/search">Search</Link>
        </li>

        <li>
          <Link to="/deal">Deals</Link>
        </li>

        <li>
          <Link to="/categories">Categories</Link>
        </li>

        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
