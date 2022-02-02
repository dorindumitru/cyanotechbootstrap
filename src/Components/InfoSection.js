import React from "react";
import { Card } from "react-bootstrap";

const InfoSection = (props) => {
  return (
    <div>
      <img src={props.img} />
      <Card
        bg={props.darkMode === "Dark" ? "light" : "dark"}
        border={props.darkMode === "Dark" ? "light" : "dark"}
        text={props.darkMode === "Dark" ? "light" : "dark"}>
        <Card.Title>{props.title}</Card.Title>
        {props.img.map((item) => (
          <div>
            <Card.Img src={item.img} />
            <Card.Subtitle>{item.img.title}</Card.Subtitle>
          </div>
        ))}
        <Card.Text>{props.text}</Card.Text>
      </Card>
    </div>
  );
};

export default InfoSection;
