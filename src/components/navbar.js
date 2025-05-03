import { Link } from "react-router-dom";
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <div className="pt-5">
      <div className="flex items-center justify-between p-4 bg-black text-white border rounded-xl shadow-lg">
        {/* Logo */}
        <img src={logo} className="h-10" alt="Logo" />

        {/* Navigation Links and Login Button */}
        <div className="flex gap-6 items-center text-lg">
          <Link 
            to="/" 
            className="hover:text-red-500 transition duration-300 ease-in-out"
          >
            Home
          </Link>
          <Link 
            to="/" 
            className="hover:text-red-500 transition duration-300 ease-in-out"
          >
            Location
          </Link>

          {/* Login Button */}
          <button 
            className="px-5 py-1 bg-red-900 text-white rounded-md hover:bg-red-700 transition duration-300 ease-in-out"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
