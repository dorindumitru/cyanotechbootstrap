import React from "react";
import { Card } from "react-bootstrap";

export default function InfoSectionCard(props) {
  return (
    <Card
      style={{ width: "18rem" }}
      bg={props.darkmode === "Dark" ? "light" : "dark"}
      border={props.darkmode === "Dark" ? "light" : "dark"}
      text={props.darkmode === "Dark" ? "light" : "dark"}
      className='mx-auto'>
      <Card.Img className='px-2 py-2' variant='top' src={props.img} />
      <Card.Title
        className={
          props.darkmode === "Dark"
            ? "text-dark text-center"
            : "text-light text-center"
        }>
        {props.title}
      </Card.Title>
      <Card.Text
        className={
          props.darkmode === "Dark"
            ? "text-dark text-center"
            : "text-light text-center"
        }>
        {props.text}
      </Card.Text>
    </Card>
  );
}
