import React from "react";
import Review from "./Review.tsx";
import "./styles/Reviews.css"

const CustomerSays = () => {
    
  const reviews = [
    {
      id: 1,
      name: 'Princes Leia',
      stars: 5,
      image: 'https://randomuser.me/api/portraits/women/91.jpg',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
    },
    {
      id: 2,
      name: 'Padme Amidala',
      stars: 4,
      image: 'https://randomuser.me/api/portraits/women/95.jpg',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
    },
    {
      id: 3,
      name: 'Luke Skywalker',
      stars: 3,
      image: 'https://randomuser.me/api/portraits/men/90.jpg',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
    },
    {
      id: 4,
      name: 'Han Solo',
      stars: 5,
      image: 'https://randomuser.me/api/portraits/men/80.jpg',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
    }

    
  ];
  return (
    <div className="review-page">
      <div className="review-container">
        <div className="review-header">
         <h2>What ours customers say!</h2>
        </div>
        
        <div className="reviews">
          {reviews.map((review) => (
            <Review key={review.id} name={review.name} rating={review.stars} review={review.review} image={review.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerSays;
