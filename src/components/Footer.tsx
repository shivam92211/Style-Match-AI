import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal text-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-softp">Style Match AI</h3>
            <p className="mt-4 text-gray-300">
              Discover your perfect style match with AI-driven color and outfit suggestions tailored just for you.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-softp">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/" className="hover:text-softp">Home</a>
              </li>
              <li>
                <a href="/about" className="hover:text-softp">About Us</a>
              </li>
              <li>
                <a href="/color" className="hover:text-softp">Clothes Color Suggestion</a>
              </li>
              <li>
                <a href="/match-up" className="hover:text-softp">Couple Match-Up</a>
              </li>
            </ul>
          </div>
          
          {/* Contact and Social Links */}
          <div>
            <h4 className="text-xl font-semibold text-softp">Contact Us</h4>
            <p className="mt-4 text-gray-300">Email: info@stylematchai.com</p>
            <p className="mt-1 text-gray-300">Phone: +1 234 567 890</p>
            
            <div className="mt-6 flex space-x-4">
              <a href="https://facebook.com" className="hover:text-softp" aria-label="Facebook">
                <FaFacebookF className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" className="hover:text-softp" aria-label="Twitter">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" className="hover:text-softp" aria-label="Instagram">
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Style Match AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
