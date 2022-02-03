import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const InfoSection = (props) => {
  return (
    <div className='d-flex py-3' style={{ gap: "10px" }}>
      <img src={props.img} alt='logo' className='w-50 rounded' />
      <Card
        className='d-flex flex-column text-center rounded p-2'
        bg={props.darkMode === "Dark" ? "light" : "dark"}
        border={props.darkMode === "Dark" ? "dark" : "light"}
        text={props.darkMode === "Dark" ? "dark" : "light"}>
        <Card.Title className='p-2'>{props.title}</Card.Title>
        <div className='d-flex p-3'>
          {props.icons.map((item) => (
            <div key={item.id}>
              <Card.Img className='w-25 m-2' src={item.icon} />
              <Card.Subtitle className='p-2'>
                {props.language === "English"
                  ? item.titleEN
                  : props.language === "Romanian"
                  ? item.titleRO
                  : props.language === "German" && item.titleDE}
              </Card.Subtitle>
            </div>
          ))}
        </div>
        <Card.Text className='p-2'>{props.text}</Card.Text>
        {props.button && (
          <Button
            variant={props.darkMode === "Dark" ? "dark" : "light"}
            size='md'
            className='mx-auto'>
            <Link
              to={props.buttonLink}
              style={{ textDecoration: "inherit", color: "inherit" }}>
              {props.button}
            </Link>
          </Button>
        )}
      </Card>
    </div>
  );
};

export default InfoSection;
