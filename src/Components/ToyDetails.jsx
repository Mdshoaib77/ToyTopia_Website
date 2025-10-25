// // import React, { useState } from 'react';
// // import { useNavigate, useParams } from 'react-router-dom';

// // // Dummy toy data (same as provided)
// // const toys = [
// //   {
// //     "toyId": 1,
// //     "toyName": "Lego Classic Bricks",
// //     "sellerName": "Toys R Us Local",
// //     "price": 49.99,
// //     "rating": 4.7,
// //     "availableQuantity": 75,
// //     "description": "A timeless set of colorful Lego bricks that encourages creativity and problem-solving.",
// //     "pictureURL": "https://plus.unsplash.com/premium_photo-1738894549224-b65576df41ca?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
// //     "subCategory": "Building Blocks"
// //   },
// //   // Add other toys here
// // ];

// // const ToyDetails = () => {
// //   const { toyId } = useParams();
// //   const navigate = useNavigate();
// //   const toy = toys.find((t) => t.toyId === parseInt(toyId));

// //   const [name, setName] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [message, setMessage] = useState('');

// //   const handleFormSubmit = (e) => {
// //     e.preventDefault();
// //     setMessage('Successfully submitted! We will get back to you soon.');
// //     setName('');
// //     setEmail('');
// //   };

// //   if (!toy) {
// //     return <div>Toy not found!</div>;
// //   }

// //   return (
// //     <div className="container mx-auto px-4 my-8">
// //       <button onClick={() => navigate('/')} className="text-indigo-600 underline">Back to Home</button>
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
// //         <img src={toy.pictureURL} alt={toy.toyName} className="w-full h-96 object-cover" />
// //         <div className="space-y-4">
// //           <h2 className="text-3xl font-semibold">{toy.toyName}</h2>
// //           <p className="text-lg font-medium">Price: ${toy.price}</p>
// //           <p className="text-sm">Rating: {toy.rating}⭐</p>
// //           <p className="text-gray-700">{toy.description}</p>
// //           <p><strong>Seller:</strong> {toy.sellerName}</p>
// //           <p><strong>Subcategory:</strong> {toy.subCategory}</p>
          
// //           {/* Form to Try Now */}
// //           <h3 className="text-2xl mt-4">Try Now</h3>
// //           {message && <p className="text-green-600">{message}</p>}
// //           <form onSubmit={handleFormSubmit} className="space-y-4">
// //             <input
// //               type="text"
// //               placeholder="Name"
// //               value={name}
// //               onChange={(e) => setName(e.target.value)}
// //               className="w-full p-2 border border-gray-300 rounded"
// //               required
// //             />
// //             <input
// //               type="email"
// //               placeholder="Email"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               className="w-full p-2 border border-gray-300 rounded"
// //               required
// //             />
// //             <button type="submit" className="w-full bg-gradient-to-r from-indigo-600 to-teal-500 text-white px-4 py-2 rounded-lg">
// //               Try Now
// //             </button>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ToyDetails;


// import React, { useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';

// // Dummy toy data (same as provided)
// const toys = [
//   {
//     "toyId": 1,
//     "toyName": "Lego Classic Bricks",
//     "sellerName": "Toys R Us Local",
//     "price": 49.99,
//     "rating": 4.7,
//     "availableQuantity": 75,
//     "description": "A timeless set of colorful Lego bricks that encourages creativity and problem-solving.",
//     "pictureURL": "https://plus.unsplash.com/premium_photo-1738894549224-b65576df41ca?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
//     "subCategory": "Building Blocks"
//   },
//   {
//     "toyId": 2,
//     "toyName": "Barbie Dream House",
//     "sellerName": "Barbie Store",
//     "price": 199.99,
//     "rating": 4.8,
//     "availableQuantity": 120,
//     "description": "A beautiful Barbie Dream House for hours of fun and imagination.",
//     "pictureURL": "https://plus.unsplash.com/premium_photo-1744123187902-36cf9ded228f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332",
//     "subCategory": "Dolls"
//   },
//   {
//     "toyId": 3,
//     "toyName": "Hot Wheels Car Set",
//     "sellerName": "Hot Wheels",
//     "price": 39.99,
//     "rating": 4.6,
//     "availableQuantity": 50,
//     "description": "A set of colorful and speedy Hot Wheels cars for your collection.",
//     "pictureURL": "https://images.unsplash.com/photo-1757660201653-7534f63c79d2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
//     "subCategory": "Cars"
//   },
//   {
//     "toyId": 4,
//     "toyName": "Transformers Action Figure",
//     "sellerName": "Hasbro",
//     "price": 29.99,
//     "rating": 4.5,
//     "availableQuantity": 80,
//     "description": "A Transformers action figure that can transform into a robot or vehicle.",
//     "pictureURL": "https://images.unsplash.com/photo-1657276055907-1ebd236c9850?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171",
//     "subCategory": "Action Figures"
//   },
//   {
//     "toyId": 5,
//     "toyName": "Nerf Gun",
//     "sellerName": "Nerf",
//     "price": 19.99,
//     "rating": 4.2,
//     "availableQuantity": 150,
//     "description": "A Nerf gun for shooting soft foam darts for some fun target practice.",
//     "pictureURL": "https://images.unsplash.com/photo-1594950988426-374080113536?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169",
//     "subCategory": "Outdoor Toys"
//   },
//   {
//     "toyId": 6,
//     "toyName": "Play-Doh Fun Factory",
//     "sellerName": "Hasbro",
//     "price": 14.99,
//     "rating": 4.3,
//     "availableQuantity": 60,
//     "description": "A Play-Doh set that lets kids create fun shapes and figures.",
//     "pictureURL": "https://images.unsplash.com/photo-1740625942947-26caf3a16d3e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332",
//     "subCategory": "Crafts"
//   },
//   {
//     "toyId": 7,
//     "toyName": "Fisher-Price Laugh & Learn",
//     "sellerName": "Fisher-Price",
//     "price": 49.99,
//     "rating": 4.8,
//     "availableQuantity": 200,
//     "description": "A fun and educational toy for toddlers to learn and play.",
//     "pictureURL": "https://plus.unsplash.com/premium_photo-1717879750918-db88946e7225?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
//     "subCategory": "Educational"
//   },
//   {
//     "toyId": 8,
//     "toyName": "Monopoly Board Game",
//     "sellerName": "Hasbro",
//     "price": 29.99,
//     "rating": 4.4,
//     "availableQuantity": 100,
//     "description": "The classic Monopoly board game for family fun.",
//     "pictureURL": "https://images.unsplash.com/photo-1703925153100-43afda8b6506?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
//     "subCategory": "Board Games"
//   }
// ];

// const ToyDetails = () => {
//   const { toyId } = useParams(); // Get the toyId from URL
//   const navigate = useNavigate(); // Navigate back to home
//   const toy = toys.find((t) => t.toyId === parseInt(toyId)); // Find the toy

//   // State for the form inputs
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   // Handle form submission
//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     setMessage('Successfully submitted! We will get back to you soon.');
//     setName(''); // Clear form after submission
//     setEmail('');
//   };

//   if (!toy) {
//     return <div>Toy not found!</div>;
//   }

//   return (
//     <div className="container mx-auto px-4 my-8">
//       {/* Back button to navigate to home */}
//       <button onClick={() => navigate('/')} className="text-indigo-600 underline">
//         Back to Home
//       </button>

//       {/* Toy details */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
//         <img src={toy.pictureURL} alt={toy.toyName} className="w-full h-96 object-cover" />
//         <div className="space-y-4">
//           <h2 className="text-3xl font-semibold">{toy.toyName}</h2>
//           <p className="text-lg font-medium">Price: ${toy.price}</p>
//           <p className="text-sm">Rating: {toy.rating}⭐</p>
//           <p className="text-gray-700">{toy.description}</p>
//           <p><strong>Seller:</strong> {toy.sellerName}</p>
//           <p><strong>Subcategory:</strong> {toy.subCategory}</p>

//           {/* Form to Try Now */}
//           <h3 className="text-2xl mt-4">Try Now</h3>
//           {message && <p className="text-green-600">{message}</p>} {/* Success message */}

//           <form onSubmit={handleFormSubmit} className="space-y-4">
//             <input
//               type="text"
//               placeholder="Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//             <button type="submit" className="w-full bg-gradient-to-r from-indigo-600 to-teal-500 text-white px-4 py-2 rounded-lg">
//               Try Now
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ToyDetails;


import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import motion
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


const ToyDetails = () => {
  const { toyId } = useParams(); 
  const navigate = useNavigate();
  const toy = toys.find((t) => t.toyId === parseInt(toyId));

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setMessage('Successfully submitted! We will get back to you soon.');
    setName('');
    setEmail('');
  };

  if (!toy) {
    return <div>Toy not found!</div>;
  }

  return (
    <motion.div 
      className="container mx-auto px-4 my-8"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 3 }} // 3 seconds duration for fade-in effect
    >
      <button onClick={() => navigate('/')} className="text-indigo-600 underline">
        Back to Home
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <motion.img
          src={toy.pictureURL}
          alt={toy.toyName}
          className="w-full h-96 object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }} // 3 seconds duration for fade-in effect
        />
        <div className="space-y-4">
          <motion.h2 
            className="text-3xl font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
          >
            {toy.toyName}
          </motion.h2>
          <p className="text-lg font-medium">Price: ${toy.price}</p>
          <p className="text-sm">Rating: {toy.rating}⭐</p>
          <p className="text-gray-700">{toy.description}</p>
          <p><strong>Seller:</strong> {toy.sellerName}</p>
          <p><strong>Subcategory:</strong> {toy.subCategory}</p>

          <h3 className="text-2xl mt-4">Try Now</h3>
          {message && <p className="text-green-600">{message}</p>}

          <form onSubmit={handleFormSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <button type="submit" className="w-full bg-gradient-to-r from-indigo-600 to-teal-500 text-white px-4 py-2 rounded-lg">
              Try Now
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default ToyDetails;
