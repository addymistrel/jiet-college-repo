import React, { useState, useEffect } from "react";
import "./TestimonialsSlider.css"; // Import your CSS file for styling

const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Ronne Galle",
      role: "Project Manager",
      image:
        "https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300",
      comment:
        "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat",
    },
    // Add more testimonials as needed
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(handleNext, 5000); // Auto-advance every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="gtco-testimonials">
      <h2>Testimonials Carousel - Cards Comments</h2>
      <div className="carousel-container">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`carousel-item ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <img src={testimonial.image} alt={`Testimonial ${index + 1}`} />
            <div className="card-body">
              <h5>
                {testimonial.name} <br />
                <span>{testimonial.role}</span>
              </h5>
              <p className="card-text">{testimonial.comment}</p>
            </div>
          </div>
        ))}
        <button className="prev-btn" onClick={handlePrev}>
          &#8249;
        </button>
        <button className="next-btn" onClick={handleNext}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
