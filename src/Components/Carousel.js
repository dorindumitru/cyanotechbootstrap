import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Carousel, Button, CarouselItem } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CyanotechCarousel(props) {
  return (
    <Container>
      <Carousel
        as='div'
        activeIndex={props.key}
        fade
        variant={props.darkMode === "Dark" ? "light" : "dark"}>
        {props.list.map((item) => (
          <CarouselItem
            interval={10000}
            className='d-flex flex-wrap'
            key={item.id}>
            <div className='d-flex justify-content-center'>
              <img
                className='w-50 d-flex text-center align-self-center justify-self-center'
                src={item.img}
                alt='slide'
              />
            </div>
            <div className='d-flex flex-column justify-content-center align-content-center'>
              <h5 className='text-info align-self-center'>{item.title}</h5>
              <p className='text-info text-center align-self-center'>
                {props.language === "English"
                  ? item.statsEN
                  : props.language === "Romanian"
                  ? item.statsRO
                  : props.language === "German" && item.statsDE}
              </p>
              <Button variant='outline-info' size='sm'>
                <Link
                  to={item.galerie}
                  style={{ textDecoration: "none", color: "white" }}>
                  {props.language === "English"
                    ? "Gallery"
                    : props.language === "Romanian"
                    ? "Galerie"
                    : props.language === "German" && "Fotogallerie"}
                </Link>
              </Button>
            </div>
          </CarouselItem>
        ))}
      </Carousel>
    </Container>
  );
}
