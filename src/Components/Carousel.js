import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Carousel, Button, CarouselItem } from "react-bootstrap";
import { Link } from "react-router-dom";

// Fix dark light mode colors

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
            <div className='d-flex flex-column px-5 py-5 mx-auto my-auto flex-md-row justify-content-center align-items-center'>
              <img className='w-50 d-flex' src={item.img} alt='slide' />
              <div className='d-flex w-sm-50 px-5 text-center flex-column justify-content-center align-content-center'>
                <h5 className='text-info'>{item.title}</h5>
                <p className='text-info'>
                  {props.language === "English"
                    ? item.statsEN
                    : props.language === "Romanian"
                    ? item.statsRO
                    : props.language === "German" && item.statsDE}
                </p>
                <Button variant='outline-info' size='md' className='mx-auto'>
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
            </div>
          </CarouselItem>
        ))}
      </Carousel>
    </Container>
  );
}
