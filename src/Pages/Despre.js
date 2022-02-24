import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../Components/Footer";
import despreLight from "../Resources/despre light.jpg";
import despreDark from "../Resources/despre dark.png";

export default function Despre(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      className={
        props.darkmode === "Dark"
          ? "bg-dark text-center text-dark"
          : "bg-light text-center text-light"
      }>
      <img
        src={props.darkmode === "Dark" ? despreLight : despreDark}
        style={{ objectFit: "cover", width: "100%" }}
        alt='about'
      />

      <Container
        className={
          props.darkmode === "Dark"
            ? "bg-dark text-center text-dark d-flex flex-column pt-2 pb-5 my-5"
            : "bg-light text-center text-light d-flex flex-column pt-2 pb-5 my-5"
        }>
        <div
          className='d-flex flex-column flex-lg-row mb-5'
          style={{ gap: "10px" }}>
          <div
            className={
              props.darkmode === "Dark"
                ? "bg-light p-3 m-auto w-100 rounded d-flex flex-column "
                : "bg-dark p-3 m-auto w-100 rounded d-flex flex-column "
            }>
            <h2>Cyanotech</h2>
            <p>
              {props.language === "English"
                ? "We are a company from Timisoara which supplies 2D laser markers, 3D laser markers, laser welding systems and laser cleaning systems. The company was founded at the beginning of 2020 so it is a young company with a dynamic spirit which puts customer satisfaction on the first place. We offer professional services to highlight our customer focus and reliability. Our partnership is one that will bring plus value to your company and production. For quotes or technical details please use the contact page."
                : props.language === "Romanian"
                ? "Suntem o companie din Timișoara ce furnizează Sisteme de Marcare Laser 2D, Sisteme de Sudură Laser și Curățătoare Laser. Inființată la începutul anului 2020, Cyanotech este o companie tânără cu un spirit dinamic ce pune pe primul loc satisfacția clientului. Oferim servicii profesionale pentru a ne remarca seriozitatea si dedicarea către clienți. Parteneriatul nostru este unul ce aduce plus valoare companiei si producției dumneavoastră. Pentru cereri de oferte sau detalii tehnice vă rugăm folosiți pagina de contact"
                : props.language === "German" &&
                  "Wir sind ein Unternehmen aus Timisoara, das 2D-Lasermarkierer, 3D-Lasermarkierer, Laser-Schweißsystem und Laser-Reinigungssysteme liefert. Das Unternehmen wurde Anfang 2020 gegründet. Wir sind ein junges, dynamisches Unternehmen, bei die Kundenzufriedenheit an erster Stelle steht. Wir bieten professionelle Dienstleistungen, die unseren Kundenfokus und unsere Zuverlässigkeit unterstreichen. Eine Partnerschaft mit uns wertet Ihr Unternehmen und Ihre Produktion auf. Für Angebote und technische Details nutzen Sie bitte die Kontaktseite. "}
            </p>
          </div>

          <div style={{ gap: "10px" }} className='d-flex flex-column'>
            <div
              className={
                props.darkmode === "Dark"
                  ? "bg-light d-flex  rounded p-3 m-auto  flex-column"
                  : "bg-dark d-flex  rounded p-3 m-auto  flex-column"
              }>
              <h3>
                {props.language === "English"
                  ? "Consultancy"
                  : props.language === "Romanian"
                  ? "Consultanță"
                  : props.language === "German" && "Beratung"}
              </h3>
              <p>
                {props.language === "English"
                  ? "We offer permanent technical consultancy for our customers even after the warranty period in case our systems are intended to be used in different projects."
                  : props.language === "Romanian"
                  ? "Oferim consultanță tehnică permanentă pentru clienții noștri chiar și după perioada de garanție în cazul în care vor să folosească sistemele noastre la proiecte diferite."
                  : props.language === "German" &&
                    "Wir bieten unseren Kunden eine fortwährende technische Beratung, selbst nach Ablauf des Garantiezeitraums und auch wenn Sie unsere Systeme bei unterschiedlichen Projekten einsetzen möchten."}
              </p>
            </div>

            <div
              className={
                props.darkmode === "Dark"
                  ? "bg-light d-flex justify-content-evenly rounded p-3 m-auto align-items-center flex-column"
                  : "bg-dark d-flex justify-content-evenly rounded p-3 m-auto align-items-center flex-column"
              }>
              <h3>
                {props.language === "English"
                  ? "Integration"
                  : props.language === "Romanian"
                  ? "Integrare"
                  : props.language === "German" && "Integration"}
              </h3>
              <p>
                {props.language === "English"
                  ? "We offer consultancy and integration services for our equipment in case it needs to be installed in an automated production line."
                  : props.language === "Romanian"
                  ? "Oferim consultanță și servicii de integrare pentru echipamentele noastre în cazul în care se dorește montarea sistemelor noastre într-o linie de producție automatizată."
                  : props.language === "German" &&
                    "Wir bieten Beratungs- und Integrationsdienste für unsere Geräte, wenn sie in eine automatisierte Produktionslinie integriert werden sollen."}
              </p>
            </div>
          </div>
          <div
            style={{ gap: "10px" }}
            className='d-flex flex-column justify-content-evenly'>
            <div
              className={
                props.darkmode === "Dark"
                  ? "bg-light d-flex justify-content-evenly rounded p-3 m-auto align-items-center flex-column"
                  : "bg-dark d-flex justify-content-evenly rounded p-3 m-auto align-items-center flex-column"
              }>
              <h3>
                {props.language === "English"
                  ? "Training"
                  : props.language === "Romanian"
                  ? "Training"
                  : props.language === "German" && "Schulung"}
              </h3>
              <p>
                {props.language === "English"
                  ? "We offer training for all of our systems for any number of operators needed. We also provide permanent technical support for our customers."
                  : props.language === "Romanian"
                  ? "Oferim training pentru toate echipamentele noastre pentru orice număr de operatori este necesar. Asigurăm deasemenea suport tehnic permanent pentru clienții noștri."
                  : props.language === "German" &&
                    "Wir bieten Schulungen zu allen unseren Systemen für jede gewünschte Anzahl von Bedienern. Außerdem bieten wir unseren Kunden fortwährenden technischen Support."}
              </p>
            </div>
            <div
              className={
                props.darkmode === "Dark"
                  ? "bg-light d-flex justify-content-evenly rounded p-3 m-auto align-items-center flex-column"
                  : "bg-dark d-flex justify-content-evenly rounded p-3 m-auto align-items-center flex-column"
              }>
              <h3>
                {props.language === "English"
                  ? "Maintenance"
                  : props.language === "Romanian"
                  ? "Mentenanță"
                  : props.language === "German" && "Wartung"}
              </h3>
              <p>
                {props.language === "English"
                  ? "We provide clear maintenance instructions for all our systems and we offer this service in case a customer needs a maintenance contract."
                  : props.language === "Romanian"
                  ? "Asigurăm instrucțiuni clare de mentenanță pentru toate sistemele noastre și asigurăm acest serviciu în cazul în care se doreste un contract de mentenanță."
                  : props.language === "German" &&
                    "Wir bieten verständliche Wartungsanleitungen für alle unsere Systeme, auf Kundenwunsch auch im Rahmen eines Wartungsvertrags."}
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Footer language={props.language} darkmode={props.darkmode} />
    </div>
  );
}
