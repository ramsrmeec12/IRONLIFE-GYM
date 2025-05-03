import { FaInstagram, FaFacebookF, FaMapMarkerAlt } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-black text-white py-6 px-4">
      <div className="flex flex-col items-center space-y-4">
        {/* Gym Name */}
        <h1 className="text-2xl font-bold text-red-900 tracking-wider">Ironlife Gym</h1>

        {/* Social Links */}
        <div className="flex gap-6 text-xl">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition duration-300">
            <FaInstagram />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition duration-300">
            <FaFacebookF />
          </a>
          <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition duration-300">
            <FaMapMarkerAlt />
          </a>
        </div>

        {/* Bottom Note */}
        <p className="text-sm text-gray-400 text-center">
          &copy; {new Date().getFullYear()} Ironlife Gym. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
