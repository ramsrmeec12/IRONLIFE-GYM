import { Link } from "react-router-dom";
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <div className="flex items-center justify-between p-3 bg-black text-white sticky top-0 z-50 shadow-lg">
      {/* Logo */}
      <img src={logo} className="h-8 hover:border borderred" alt="Logo" />

      {/* Navigation Links and Login Button */}
      <div className="flex gap-6 items-center text-lg">
        <Link 
          to="/" 
          className="hover:text-red-500 transition duration-300 ease-in-out"
        >
          Home
        </Link>
        <Link 
          to="https://maps.app.goo.gl/hZZc46oWTtPPgJyf8" 
          target="_blank" 
          className="hover:text-red-500 transition duration-300 ease-in-out"
        >
          Location
        </Link>
        <button 
          className="px-5 py-1 bg-red-900 text-white rounded-md hover:bg-red-700 transition duration-300 ease-in-out"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Navbar;
