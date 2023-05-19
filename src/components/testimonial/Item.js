import React from "react";
import './Testimonial.css'
export default function Item(props) {
  return (
    <div className="card">
      <img  className="product--image" src={props.url} alt="Testimonial Images" />
      <h4>{props.name}</h4>
      <p>{props.description}</p>
      
    </div>
  );
}