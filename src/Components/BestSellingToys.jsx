import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { motion } from 'framer-motion'; // Import motion from Framer Motion

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
];


const BestSellingToys = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-yellow-500 my-8">
        Best Selling Toys
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {toys.map((toy) => (
          <motion.div
            key={toy.toyId}
            className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }} // Initial state (before animation)
            animate={{ opacity: 1, scale: 1 }} // Final state (after animation)
            transition={{ duration: 2 }} // 2-second animation duration
          >
            <img
              src={toy.pictureURL}
              alt={toy.toyName}
              className="w-full h-56 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <div className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800">{toy.toyName}</h2>
              <p className="text-lg font-medium text-gray-600">Price: ${toy.price}</p>
              <p className="text-sm text-gray-500">Rating: {toy.rating}⭐</p>
              <p className="text-sm text-gray-500">Available Quantity: {toy.availableQuantity}</p>
              <p className="text-gray-700 text-sm mt-2">{toy.description}</p>

              {/* Link to ToyDetails page */}
              <Link to={`/toy/${toy.toyId}`}>
                <button className="w-full bg-gradient-to-r from-orange-600 to-pink-500 text-white px-4 py-2 rounded-lg hover:bg-gradient-to-l hover:from-pink-500 hover:to-orange-600 transition duration-200">
                  View More
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BestSellingToys;
