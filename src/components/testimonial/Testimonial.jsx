import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Item from "./Item";
import { productData, responsive } from "./Data";
import './Testimonial.css';

export default function Testimonial() {
  const product = productData.map((item) => (
    <Item
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <div className="Testimonial">
      <h1>What Our Students are saying</h1>
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
}
