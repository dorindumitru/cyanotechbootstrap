import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Carousel } from "react-bootstrap";

export default function CyanotechCarousel(props) {
  return (
    <Carousel
      className='d-flex'
      activeIndex={props.key}
      fade
      variant={props.darkMode === "Dark" ? "light" : "dark"}>
      <Carousel.Item interval={10000}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <img className='w-50' src={props.img} alt='Slide' />
          <Carousel.Caption style={{ alignSelf: "flex-end" }}>
            <h5>{props.title}</h5>
            <p>{props.description}</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}
