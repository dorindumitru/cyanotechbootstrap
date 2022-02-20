import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import facebook from "../Resources/Icons/Social Media/facebook.png";
import twitter from "../Resources/Icons/Social Media/twitter.png";
import linkedin from "../Resources/Icons/Social Media/linkedin.png";
import youtube from "../Resources/Icons/Social Media/youtube.png";
import { Card, Form, Button } from "react-bootstrap";

const Footer = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [submit, setSubmit] = useState(
    props.language === "English"
      ? "Submit"
      : props.language === "Romanian"
      ? "Trimite"
      : props.language === "German" && "Einreichen"
  );

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_7r512sf",
        "template_7woi1m6",
        form.current,
        "user_2X7RP8YQCJDIxweOZTstF"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert(
            props.language === "English"
              ? "You have been successfully subscribed to our newsletter. Thank you!"
              : props.language === "Romanian"
              ? "V-ați abonat cu succes la newsletter-ul nostru. Mulțumim!"
              : props.language === "German" &&
                "Sie haben sich erfolgreich für unseren Newsletter angemeldet. Danke!"
          );
        },
        (error) => {
          console.log(error.text);
        }
      );
    setSubmit(
      props.language === "English"
        ? "Sent"
        : props.language === "Romanian"
        ? "Trimis"
        : props.language === "German" && "Geschickt"
    );
    setFormData({
      name: "",
      email: "",
    });
  }

  return (
    <div
      style={{ gap: "10px" }}
      className='d-flex flex-column flex-md-row justify-content-center align-items-center mt-3'>
      <Form
        onSubmit={sendEmail}
        ref={form}
        className={
          props.darkmode === "Dark"
            ? "border rounded w-50 p-3 text-center bg-light"
            : "border rounded w-50 p-3 text-center bg-dark"
        }>
        <h3 className={props.darkmode === "Dark" ? "text-dark" : "text-light"}>
          {props.language === "English"
            ? "Subscribe to our newsletter"
            : props.language === "Romanian"
            ? "Abonare Newsletter"
            : props.language === "German" && "Newsletter-Abonnement"}
        </h3>
        <Form.Group className='mb-2'>
          <Form.Control
            as='input'
            onChange={handleChange}
            value={formData.name}
            required
            name='name'
            type='text'
            placeholder={
              props.language === "English"
                ? "Name"
                : props.language === "Romanian"
                ? "Nume"
                : props.language === "German" && "Name"
            }
          />
        </Form.Group>
        <Form.Group
          className={props.darkmode === "Dark" ? "text-dark" : "text-light"}
          controlId='formBasicEmail'>
          <Form.Control
            as='input'
            required
            onChange={handleChange}
            value={formData.email}
            name='email'
            type='email'
            placeholder={
              props.language === "English"
                ? "E-mail address"
                : props.language === "Romanian"
                ? "Adresă de e-mail"
                : props.language === "German" && "E-Mail-Addresse"
            }
          />
          <Form.Text
            className={props.darkmode === "Dark" ? "text-dark" : "text-white"}>
            {props.language === "English"
              ? "We'll never share your email with anyone else."
              : props.language === "Romanian"
              ? "Nu vom împărtăși niciodată e-mailul dumneavoastră cu nimeni altcineva."
              : props.language === "German" &&
                "Wir werden Ihre E-Mail-Adresse niemals an Dritte weitergeben."}
          </Form.Text>
        </Form.Group>

        <Button
          type='submit'
          variant={props.darkmode === "Dark" ? "dark" : "light"}>
          {submit}
        </Button>
        <div className='pt-3 d-flex justify-content-center'>
          <Card
            className='d-flex flex-column text-center rounded'
            bg={props.darkmode === "Dark" ? "light" : "dark"}
            border={props.darkmode === "Dark" ? "dark" : "light"}
            text={props.darkmode === "Dark" ? "dark" : "light"}>
            <Card.Title className='p-2'>
              {props.language === "English"
                ? "Follow us on social media"
                : props.language === "Romanian"
                ? "Urmăriți-ne pe rețelele sociale"
                : props.language === "German" &&
                  "Folgen Sie uns auf den sozialen Medien"}
            </Card.Title>
            <div className=''>
              <a
                href='https://www.facebook.com/cyanotech.industrial'
                target='_blank'
                rel='noreferrer'>
                <Card.Img
                  src={facebook}
                  alt='facebook'
                  className=' p-3'
                  style={{ width: "25%", maxWidth: "100px" }}
                />
              </a>
              <a
                href='https://twitter.com/CyanotechEurope'
                target='_blank'
                rel='noreferrer'>
                <Card.Img
                  src={twitter}
                  alt='twitter'
                  className=' p-3'
                  style={{ width: "25%", maxWidth: "100px" }}
                />
              </a>
              <a
                href='https://www.linkedin.com/company/cyanotechromania'
                target='_blank'
                rel='noreferrer'>
                <Card.Img
                  src={linkedin}
                  alt='linkedin'
                  className=' p-3'
                  style={{ width: "25%", maxWidth: "100px" }}
                />
              </a>
              <a
                href='https://www.youtube.com/channel/UCWh6iAsBNQooHktqQy7vOog'
                target='_blank'
                rel='noreferrer'>
                <Card.Img
                  src={youtube}
                  alt='youtube'
                  className=' p-3'
                  style={{ width: "25%", maxWidth: "100px" }}
                />
              </a>
            </div>
          </Card>
        </div>
      </Form>
    </div>
  );
};

export default Footer;
