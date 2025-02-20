import { Link } from 'react-router-dom';
import { Microscope, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Microscope className="h-8 w-8 text-[#7032eb]" />
              <span className="text-xl font-bold bg-gradient-to-r from-[#7032eb] to-[#00acea] text-transparent bg-clip-text">
                Oncodetect
              </span>
            </div>
            <p className="text-gray-600">
              Advanced breast cancer detection through AI-powered mammogram analysis.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-[#7032eb]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-[#7032eb]">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/community"
                  className="text-gray-600 hover:text-[#7032eb]"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-[#7032eb]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-600">
                <Mail className="h-5 w-5" />
                <span>contact@oncodetect.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600">
                <Phone className="h-5 w-5" />
                <span>+94 11 3456789</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600">
                <MapPin className="h-5 w-5" />
                <span>4 Hector Kobbekaduwa Mw, Colombo 07</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4">
              Stay updated with our latest developments and research.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7032eb]"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-gradient-to-r from-[#7032eb] to-[#00acea] text-white rounded-md hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Oncodetect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;