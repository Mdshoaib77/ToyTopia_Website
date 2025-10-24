import React from "react";

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "John Doe",
    image: "https://th.bing.com/th/id/OIP.Y8VsUuMz2o3UombnsvmrtgHaHa?o=7&cb=12rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    review:
      "ToyTopia has the best collection of toys. My kids love the Lego sets. Great customer service!",
  },
  {
    id: 2,
    name: "Jane Smith",
    image: "https://media.istockphoto.com/id/1230749818/photo/portrait-of-smiling-male-owner-of-fashion-store-standing-in-front-of-clothing-display.jpg?s=612x612&w=0&k=20&c=xoWhF-hrQcbMEPDYncHiHF8HJX2YgmYt7T-KLCPZIpY=",
    review:
      "I bought the Barbie Dream House for my daughter. She absolutely loves it! Highly recommend.",
  },
  {
    id: 3,
    name: "Sam Wilson",
    image: "https://media.istockphoto.com/id/1318928248/photo/portrait-of-a-young-man.jpg?s=612x612&w=0&k=20&c=ayy0fWfzLoC20BlYXDQmle1vz0a9Qrv8ssSwE3dLpzA=",
    review:
      "Amazing selection of toys. I got the Hot Wheels car set for my son, and he couldn't be happier.",
  },
];

const Testimonials = () => {
  return (
    <div className="my-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-8">Customer Testimonials</h2>
      <div className="flex flex-col sm:flex-row sm:justify-center sm:gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">{testimonial.name}</h3>
            <p className="text-gray-600 mt-2">{testimonial.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
