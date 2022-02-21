import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { Container, Button, Form, Card } from "react-bootstrap";
import despreLight from "../Resources/despre light.jpg";
import despreDark from "../Resources/despre dark.png";

const Contact = (props) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    version: "",
    subscribe: false,
  });
  const [submit, setSubmit] = useState(
    props.language === "English"
      ? "Submit"
      : props.language === "Romanian"
      ? "Trimite"
      : props.language === "German" && "Einreichen"
  );

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  const form = useRef();
  function handleSubmit(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kn9huf8",
        "template_juyn66o",
        form.current,
        "user_2X7RP8YQCJDIxweOZTstF"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert(
            props.language === "English"
              ? "You have successfully sent us a message. Thank you!"
              : props.language === "Romanian"
              ? "Ne-ați trimis cu succes un mesaj. Mulțumim!"
              : props.language === "German" &&
                "Sie haben uns erfolgreich eine Nachricht gesendet. Danke!"
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
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      version: "",
      subscribe: false,
    });
  }

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
      className={props.darkmode === "Dark" ? "bg-dark" : "bg-light"}>
      <Container>
        <div>
          <img
            src={props.darkmode === "Dark" ? despreLight : despreDark}
            className='pb-2 '
            style={{ objectFit: "cover", width: "100%" }}
            alt='contact'
          />
        </div>
        <div
          style={{ gap: "30px" }}
          className='d-flex flex-column flex-lg-row align-items-center justify-content-center'>
          <Card
            style={{ width: "50%" }}
            className={
              props.darkmode === "Dark"
                ? "bg-light text-center text-dark p-5"
                : "bg-dark text-center text-light p-5"
            }>
            <Card.Title className='text-center'>
              {props.language === "English"
                ? "Contact"
                : props.language === "Romanian"
                ? "Contact"
                : props.language === "German" && "Kontakt"}
            </Card.Title>
            <Card.Text>
              {props.language === "English"
                ? "Contact us to talk about our systems or an eventual partnership. We offer our experience to our customers to ensure their projects realization."
                : props.language === "Romanian"
                ? "Luați legătura cu noi pentru a discuta despre sistemele noastre sau un eventual parterneriat. Ne punem experienta la dispozitia clientilor nostri pentru realizarea proiectelor acestora."
                : props.language === "German" &&
                  "Kontaktieren Sie uns, um über unsere Systeme oder eine eventuelle Partnerschaft zu sprechen. Wir bieten unseren Kunden unsere Erfahrung, um die Umsetzung ihrer Projekte zu gewährleisten."}
            </Card.Text>
            <Card.Text>
              ✓
              {props.language === "English"
                ? "Technical consultancy in laser equipment"
                : props.language === "Romanian"
                ? "Consultanță tehnica în aparatură laser"
                : props.language === "German" &&
                  "Technische Beratung für Lasergeräte"}
            </Card.Text>
            <Card.Text>
              ✓
              {props.language === "English"
                ? "Permanent technical support"
                : props.language === "Romanian"
                ? "Suport tehnic permanent"
                : props.language === "German" &&
                  "Fortwährender technischer Support"}
            </Card.Text>
          </Card>
          <Form
            ref={form}
            onSubmit={handleSubmit}
            className={
              props.darkmode === "Dark"
                ? "border rounded p-3 text-center bg-light"
                : "border rounded p-3 text-center bg-dark"
            }>
            <Form.Group
              className={props.darkmode === "Dark" ? "text-dark" : "text-light"}
              controlId='name'>
              <Form.Control
                as='input'
                onChange={handleChange}
                required
                value={formData.firstName}
                name='firstName'
                type='text'
                placeholder={
                  props.language === "English"
                    ? "First Name"
                    : props.language === "Romanian"
                    ? "Prenume"
                    : props.language === "German" && "Vorname"
                }
              />
            </Form.Group>
            <Form.Group
              className={props.darkmode === "Dark" ? "text-dark" : "text-light"}
              controlId='name'>
              <Form.Control
                as='input'
                onChange={handleChange}
                required
                value={formData.lastName}
                name='lastName'
                type='text'
                placeholder={
                  props.language === "English"
                    ? "Last Name"
                    : props.language === "Romanian"
                    ? "Nume"
                    : props.language === "German" && "Familienname"
                }
              />
            </Form.Group>
            <Form.Group
              className={props.darkmode === "Dark" ? "text-dark" : "text-light"}
              controlId='phone'>
              <Form.Control
                as='input'
                onChange={handleChange}
                required
                value={formData.phone}
                name='phone'
                type='number'
                placeholder={
                  props.language === "English"
                    ? "Phone number"
                    : props.language === "Romanian"
                    ? "Număr telefon"
                    : props.language === "German" && "Telefonnummer"
                }
              />
            </Form.Group>
            <Form.Group
              className={props.darkmode === "Dark" ? "text-dark" : "text-light"}
              controlId='email'>
              <Form.Control
                as='input'
                onChange={handleChange}
                required
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
                className={
                  props.darkmode === "Dark" ? "text-dark" : "text-white"
                }>
                {props.language === "English"
                  ? "We'll never share your email with anyone else."
                  : props.language === "Romanian"
                  ? "Nu vom împărtăși niciodată e-mailul dumneavoastră cu nimeni altcineva."
                  : props.language === "German" &&
                    "Wir werden Ihre E-Mail-Adresse niemals an Dritte weitergeben."}
              </Form.Text>
            </Form.Group>
            <Form.Group
              className={
                props.darkmode === "Dark" ? "text-dark" : "text-light"
              }>
              <Form.Check
                type='checkbox'
                name='subscribe'
                checked={formData.subscribe}
                onChange={handleChange}
                label={
                  props.language === "English"
                    ? "Would you like to subscribe to our newsletter?"
                    : props.language === "Romanian"
                    ? "Ați dori să vă abonați la newsletter-ul nostru?"
                    : props.language === "German" &&
                      "Sie möchten unseren Newsletter abonnieren?"
                }></Form.Check>
            </Form.Group>
            <Form.Group className='mb-2'>
              <Form.Control
                as='textarea'
                onChange={handleChange}
                required
                name='version'
                value={formData.version}
                type='textarea'
                placeholder={
                  props.language === "English"
                    ? "Message"
                    : props.language === "Romanian"
                    ? "Mesaj"
                    : props.language === "German" && "Nachricht"
                }
              />
            </Form.Group>
            <Button
              type='submit'
              // onSubmit={handleSubmit}
              variant={props.darkmode === "Dark" ? "dark" : "light"}>
              {submit}
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
};
export default Contact;
