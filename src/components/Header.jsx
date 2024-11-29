// import { Link } from "react-router-dom";
// import { FaUser, FaShoppingCart } from "react-icons/fa"; 

// function Header() {
//   return (
//     <div className="header bg-gray-800 text-white px-4 py-3">
//       <div className="flex items-center justify-between">
//         {/* Logo */}
//         <div className="logo text-xl font-bold">
//           <Link to="/" className="text-yellow-300 hover:text-yellow-400">M&R Glam</Link>
//         </div>

//         {/* Search Bar */}
//         <div className="search-bar mx-4 w-1/3">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="w-full p-2 rounded-lg bg-gray-200 text-gray-800"
//           />
//         </div>

//         {/* Profile and Cart Icons */}
//         <div className="actions flex items-center space-x-4">
//           <Link to="/profile" className="text-gray-300 hover:text-yellow-400 flex items-center">
//             <FaUser className="mr-1" /> Profile
//           </Link>
//           <Link to="/cart" className="text-gray-300 hover:text-yellow-400 flex items-center">
//             <FaShoppingCart className="mr-1" /> Cart
//           </Link>
//         </div>
//       </div>

//       {/* Navigation Links */}
//       <ul className="nav-links flex justify-around mt-4">
//         {/* Categories Dropdown */}
//         <li className="relative group">
//           <Link to="/categories" className="text-gray-300 hover:text-orange-400">Categories</Link>
//           {/* Dropdown Menu */}
//           <ul className="absolute left-0 hidden group-hover:block bg-gray-700 text-white mt-2 rounded shadow-lg">
//             <li className="px-4 py-2 hover:bg-gray-600">
//               <Link to="/categories/womens-fashion">Ladies Fashion</Link>
//             </li>
//             <li className="px-4 py-2 hover:bg-gray-600">
//               <Link to="/categories/mens-fashion">Gents Fashion</Link>
//             </li>
//             <li className="px-4 py-2 hover:bg-gray-600">
//               <Link to="/categories/shoes">Shoes</Link>
//             </li>
//             <li className="px-4 py-2 hover:bg-gray-600">
//               <Link to="/categories/gym-attires">Gym Attires</Link>
//             </li>
//             <li className="px-4 py-2 hover:bg-gray-600">
//               <Link to="/categories/other-clothing">Other Clothing</Link>
//             </li>
//           </ul>
//         </li>
//         <li>
//           <Link to="/" className="text-gray-300 hover:text-orange-400">Home</Link>
//         </li>
//         <li>
//           <Link to="/about" className="text-gray-300 hover:text-orange-400">About Us</Link>
//         </li>
//         <li>
//           <Link to="/contact" className="text-gray-300 hover:text-orange-400">Contact</Link>
//         </li>
//         <li>
//           <Link to="/deals" className="text-gray-300 hover:text-orange-400">Deals</Link>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default Header;





import { Link } from "react-router-dom";
import { FaUser, FaShoppingCart } from "react-icons/fa";

function Header() {
  return (
    <div className="header px-6 py-4 rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="logo text-2xl font-extrabold">
          <Link to="/" className="text-[#952517] hover:text-[#f8a879]">
            M&R Glam
          </Link>
        </div>

        {/* Search Bar */}
        <div className="search-bar mx-2 w-2/3">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-3 rounded-full bg-[#fbceb1] text-[#952517] placeholder-[#952517] focus:outline-none focus:ring-2 focus:ring-[#952517]"
          />
        </div>

        {/* Profile and Cart Icons */}
        <div className="actions flex items-center space-x-6">
          <Link
            to="/profile"
            className="text-[#952517] hover:text-[#f8a879] flex items-center"
          >
            <FaUser className="mr-2 text-xl" /> Profile
          </Link>
          <Link
            to="/cart"
            className="text-[#952517] hover:text-[#f8a879] flex items-center"
          >
            <FaShoppingCart className="mr-2 text-xl" /> Cart
          </Link>
        </div>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links flex justify-center space-x-8 mt-6 text-lg">
        {/* Categories Dropdown */}
        <li className="relative group">
          <Link
            to="/categories"
            className="text-[#952517] hover:text-[#f8a879] transition-all duration-300"
          >
            Categories
          </Link>
          {/* Dropdown Menu */}
          <ul className="absolute left-0 hidden group-hover:block bg-[#fbceb1] text-[#952517] mt-2 rounded-lg shadow-lg overflow-hidden">
            <li className="px-6 py-3 hover:bg-[#f8a879] hover:text-white">
              <Link to="/categories/womens-fashion">Ladies Fashion</Link>
            </li>
            <li className="px-6 py-3 hover:bg-[#f8a879] hover:text-white">
              <Link to="/categories/mens-fashion">Gents Fashion</Link>
            </li>
            <li className="px-6 py-3 hover:bg-[#f8a879] hover:text-white">
              <Link to="/categories/shoes">Shoes</Link>
            </li>
            <li className="px-6 py-3 hover:bg-[#f8a879] hover:text-white">
              <Link to="/categories/gym-attires">Gym Attires</Link>
            </li>
            <li className="px-6 py-3 hover:bg-[#f8a879] hover:text-white">
              <Link to="/categories/other-clothing">Other Clothing</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/" className="text-[#952517] hover:text-[#f8a879]">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-[#952517] hover:text-[#f8a879]">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-[#952517] hover:text-[#f8a879]">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/deals" className="text-[#952517] hover:text-[#f8a879]">
            Deals
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
