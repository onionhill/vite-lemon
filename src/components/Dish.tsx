import React from "react";
import "../components/styles/Dish.css";

import Salad from "../components/assets/salad.jpg";
import Bruschetta1 from "../components/assets/bruschetta1.jpg";
import Creme from "../components/assets/creme.jpg";

import { MdDeliveryDining } from "react-icons/md";

const Dish = () => {
  const menuItems = [
    {
      id: 1,
      image: Salad,
      title: "Greek Salad",
      price: "$12.99",
      description:
        "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago styled feta cheese, garnished with crunchy garlic, rosemary croutons.",
      order: "Order a delivery",
    },
    {
      id: 2,
      image: Bruschetta1,
      title: "Bruschetta",
      price: "$5.99",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil; made perfect for an evening dinner.",
      order: "Order a delivery",
    },
    {
      id: 3,
      image: Creme,
      title: "Lemon Dessert",
      price: "$5.00",
      description:
        "This comes straight from Grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.",
      order: "Order a delivery",
    },
  ];

  const mappedItems = menuItems.map((dish) => {
    return (
        <div key={dish.id} className="card">
          <div className="image-container">
            <img src={dish.image} alt={dish.title} />
          </div>
          <div className="dish-card-text">
            <div className="dish-card-text-title">
              <h3>{dish.title}</h3>
              <h3 className="dish-price">{dish.price}</h3>
            </div>
            <p>{dish.description}</p>
            <h4>
              {dish.order}
              <MdDeliveryDining size={30} style={{ marginLeft: "10px" }} />
            </h4>
          </div>
        </div>
    );
  });

  return <div className="dish-cards">{mappedItems}</div>;
};

export default Dish;
