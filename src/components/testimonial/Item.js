import React from "react";

export default function Item(props) {
  return (
    <div className="card">
      <img  className="product--image" src={props.url} alt="Testimonial Images" />
      <h2>{props.name}</h2>
      <p className="price">{props.price}</p>
      <p>{props.description}</p>
      <p>
        <button>Add to Cart</button>
      </p>
    </div>
  );
}