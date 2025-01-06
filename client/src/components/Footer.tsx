import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#030712] text-white py-8 border-t-[0.1px]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* About Code.Compiler */}
          <div>
            <h4 className="text-lg font-semibold mb-4">About Code.Compiler</h4>
            <p className="text-sm text-blue-300">
              Code.Compiler is a powerful online code editor that allows you to
              save, load, edit, and delete your code seamlessly. Built to
              enhance your productivity and streamline your coding workflow.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul>
              <li>
                <a href="/" className="text-sm hover:text-blue-400">
                  Home
                </a>
              </li>
              <li>
                <a href="/features" className="text-sm hover:text-blue-400">
                  Features
                </a>
              </li>
              <li>
                <a href="/about" className="text-sm hover:text-blue-400">
                  About-us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm hover:text-blue-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-sm">Email: support@codecompiler.com</p>
            <p className="text-sm">Phone: +91 913-2xxxxx</p>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-xl hover:text-blue-600" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-xl hover:text-blue-400" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-xl hover:text-pink-500" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-xl hover:text-blue-700" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t-[0.1px] border-white mt-8 pt-4 text-center">
          <p className="text-sm ">
            &copy; {new Date().getFullYear()} Code.Compiler | All Rights
            Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
