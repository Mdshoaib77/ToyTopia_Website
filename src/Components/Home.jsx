import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { motion } from "framer-motion"; // Import Framer Motion

// JSON data for toys
const toys = [
  {
    "toyId": 1,
    "toyName": "Lego Classic Bricks",
    "sellerName": "Toys R Us Local",
    "price": 49.99,
    "rating": 4.7,
    "availableQuantity": 75,
    "description": "A timeless set of colorful Lego bricks that encourages creativity and problem-solving.",
    "pictureURL": "https://plus.unsplash.com/premium_photo-1738894549224-b65576df41ca?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    "subCategory": "Building Blocks"
  },
  {
    "toyId": 2,
    "toyName": "Barbie Dream House",
    "sellerName": "Barbie Store",
    "price": 199.99,
    "rating": 4.8,
    "availableQuantity": 120,
    "description": "A beautiful Barbie Dream House for hours of fun and imagination.",
    "pictureURL": "https://plus.unsplash.com/premium_photo-1744123187902-36cf9ded228f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332",
    "subCategory": "Dolls"
  },
  {
    "toyId": 3,
    "toyName": "Hot Wheels Car Set",
    "sellerName": "Hot Wheels",
    "price": 39.99,
    "rating": 4.6,
    "availableQuantity": 50,
    "description": "A set of colorful and speedy Hot Wheels cars for your collection.",
    "pictureURL": "https://images.unsplash.com/photo-1757660201653-7534f63c79d2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    "subCategory": "Cars"
  },
  {
    "toyId": 4,
    "toyName": "Transformers Action Figure",
    "sellerName": "Hasbro",
    "price": 29.99,
    "rating": 4.5,
    "availableQuantity": 80,
    "description": "A Transformers action figure that can transform into a robot or vehicle.",
    "pictureURL": "https://images.unsplash.com/photo-1657276055907-1ebd236c9850?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171",
    "subCategory": "Action Figures"
  },
  {
    "toyId": 5,
    "toyName": "Nerf Gun",
    "sellerName": "Nerf",
    "price": 19.99,
    "rating": 4.2,
    "availableQuantity": 150,
    "description": "A Nerf gun for shooting soft foam darts for some fun target practice.",
    "pictureURL": "https://images.unsplash.com/photo-1594950988426-374080113536?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169",
    "subCategory": "Outdoor Toys"
  },
  {
    "toyId": 6,
    "toyName": "Play-Doh Fun Factory",
    "sellerName": "Hasbro",
    "price": 14.99,
    "rating": 4.3,
    "availableQuantity": 60,
    "description": "A Play-Doh set that lets kids create fun shapes and figures.",
    "pictureURL": "https://images.unsplash.com/photo-1740625942947-26caf3a16d3e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332",
    "subCategory": "Crafts"
  },
  {
    "toyId": 7,
    "toyName": "Fisher-Price Laugh & Learn",
    "sellerName": "Fisher-Price",
    "price": 49.99,
    "rating": 4.8,
    "availableQuantity": 200,
    "description": "A fun and educational toy for toddlers to learn and play.",
    "pictureURL": "https://plus.unsplash.com/premium_photo-1717879750918-db88946e7225?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    "subCategory": "Educational"
  },
  {
    "toyId": 8,
    "toyName": "Monopoly Board Game",
    "sellerName": "Hasbro",
    "price": 29.99,
    "rating": 4.4,
    "availableQuantity": 100,
    "description": "The classic Monopoly board game for family fun.",
    "pictureURL": "https://images.unsplash.com/photo-1703925153100-43afda8b6506?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
    "subCategory": "Board Games"
  }
];

const Home = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-teal-600 my-8">
        Popular Toys
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {toys.map((toy) => (
          <motion.div
            key={toy.toyId}
            className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3 }} // 3-second animation for the card entrance
          >
            <motion.img
              src={toy.pictureURL}
              alt={toy.toyName}
              className="w-full h-56 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }} // Hover effect duration
            />
            <div className="p-6 space-y-4">
              <motion.h2
                className="text-2xl font-semibold text-gray-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3, delay: 0.5 }} // Title fades in after 0.5 seconds
              >
                {toy.toyName}
              </motion.h2>
              <motion.p
                className="text-lg font-medium text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3, delay: 1 }} // Price fades in after 1 second
              >
                Price: ${toy.price}
              </motion.p>
              <motion.p
                className="text-sm text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3, delay: 1.5 }} // Rating fades in after 1.5 seconds
              >
                Rating: {toy.rating}⭐
              </motion.p>
              <motion.p
                className="text-sm text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3, delay: 2 }} // Available Quantity fades in after 2 seconds
              >
                Available Quantity: {toy.availableQuantity}
              </motion.p>
              <motion.p
                className="text-gray-700 text-sm mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3, delay: 2.5 }} // Description fades in after 2.5 seconds
              >
                {toy.description}
              </motion.p>

              {/* Link to ToyDetails page */}
              <Link to={`/toy/${toy.toyId}`}>
                <motion.button
                  className="w-full bg-gradient-to-r from-indigo-600 to-teal-500 text-white px-4 py-2 rounded-lg hover:bg-gradient-to-l hover:from-teal-500 hover:to-indigo-600 transition duration-200"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 3, delay: 3 }} // Button fades in after 3 seconds
                >
                  View More
                </motion.button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Home;
