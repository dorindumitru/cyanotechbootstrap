import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { Container, Button, Form } from "react-bootstrap";

const QuoteRequest = (props) => {
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
              ? "You have successfully sent us a quote request. Thank you!"
              : props.language === "Romanian"
              ? "Ne-ați trimis cu succes o cerere de ofertă. Mulțumim!"
              : props.language === "German" &&
                "Sie haben uns erfolgreich eine Angebotsanfrage gesendet. Danke!"
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
    <Container>
      <div
        className={
          props.reverse === "reverse"
            ? "d-flex py-3 flex-column-reverse flex-lg-row-reverse text-center justify-content-center align-items-center"
            : "d-flex py-3 flex-column flex-lg-row text-center justify-content-center align-items-center"
        }
        style={{ gap: "10px" }}>
        <div className='w-50 my-auto'>
          <img className='w-100 rounded' src={props.logo} alt='Contact'></img>
        </div>
        <div
          className={
            props.darkmode === "Dark"
              ? "w-50 bg-light text-dark m-auto p-3 rounded"
              : "w-50 bg-dark text-light m-auto p-3 rounded"
          }>
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
              controlId='lastName'>
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
                    ? "Version / Details"
                    : props.language === "Romanian"
                    ? "Versiune / Detalii"
                    : props.language === "German" && "Ausführung / Details"
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
      </div>
    </Container>
  );
};

export default QuoteRequest;
