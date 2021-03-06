import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const InfoSection = (props) => {
  return (
    <div
      className={
        props.class ||
        "d-flex flex-column justyfi-content-center align-items-center flex-lg-row py-3"
      }
      style={{ gap: "10px" }}>
      <div style={{ width: "100%", height: "100%" }}>
        <img src={props.img} alt='logo' className='w-100 rounded' />
      </div>
      <Card
        // style={{ maxWidth: "50%" }}
        className='d-flex w-100 flex-column text-center rounded justify-content-center align-items-center'
        bg={props.darkmode === "Dark" ? "light" : "dark"}
        border={props.darkmode === "Dark" ? "dark" : "light"}
        text={props.darkmode === "Dark" ? "dark" : "light"}>
        <Card.Title className='p-2'>{props.title}</Card.Title>
        <div className='d-flex p-3 flex-column flex-lg-row'>
          {props.icons &&
            props.icons.map((item) => (
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
        <div className='p-2'>{props.text}</div>
        {props.button && (
          <Button
            variant={props.darkmode === "Dark" ? "dark" : "light"}
            size='md'
            className='mx-auto mb-2'>
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
