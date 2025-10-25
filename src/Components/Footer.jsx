import React from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa"; // Import social media icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-10">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Footer Top */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-center mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <div className="text-center sm:text-left">
            <h2 className="text-4xl font-semibold tracking-wider text-teal-400">ToyTopia</h2>
            <p className="text-lg mt-2 opacity-80">Creating Memories, One Toy at a Time</p>
          </div>
          <div className="flex justify-center sm:justify-start mt-6 sm:mt-0 space-x-8 text-sm">
            <motion.a
              href="/about"
              className="hover:text-teal-300 transition-colors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.3 }}
            >
              About Us
            </motion.a>
            <motion.a
              href="/shop"
              className="hover:text-teal-300 transition-colors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.4 }}
            >
              Shop
            </motion.a>
            <motion.a
              href="/contact"
              className="hover:text-teal-300 transition-colors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
            >
              Contact
            </motion.a>
            <motion.a
              href="/terms"
              className="hover:text-teal-300 transition-colors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.6 }}
            >
              Terms & Conditions
            </motion.a>
            <motion.a
              href="/privacy"
              className="hover:text-teal-300 transition-colors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.7 }}
            >
              Privacy Policy
            </motion.a>
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <motion.p
            className="text-sm opacity-70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.8 }}
          >
            &copy; {new Date().getFullYear()} ToyTopia. All Rights Reserved.
          </motion.p>
          <div className="mt-4 text-sm">
            <motion.p
              className="text-teal-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 1 }}
            >
              Follow us:
            </motion.p>
            <div className="flex justify-center space-x-6 mt-3">
              <motion.a
                href="https://facebook.com"
                className="hover:text-teal-300 transition-colors"
                aria-label="Facebook"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1.2 }}
              >
                <FaFacebookF className="text-2xl sm:text-3xl" />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                className="hover:text-teal-300 transition-colors"
                aria-label="Twitter"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1.4 }}
              >
                <FaTwitter className="text-2xl sm:text-3xl" />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                className="hover:text-teal-300 transition-colors"
                aria-label="Instagram"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1.6 }}
              >
                <FaInstagram className="text-2xl sm:text-3xl" />
              </motion.a>
              <motion.a
                href="https://youtube.com"
                className="hover:text-teal-300 transition-colors"
                aria-label="YouTube"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1.8 }}
              >
                <FaYoutube className="text-2xl sm:text-3xl" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
