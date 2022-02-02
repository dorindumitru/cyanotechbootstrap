import React from "react";
import Carousel from "../Components/Carousel";
import CarouselAcasaList from "../Lists/CarouselAcasaList";
import InfoSectionList from "../Lists/InfoSectionList";
import InfoSectionCard from "../Components/InfoSectionCard";
import { Container } from "react-bootstrap";
import HoloMarking from "../Resources/HoloMarking.mp4";
import AcasaInfoComponentList1 from "../Lists/AcasaInfoComponentList1";
import InfoSection from "../Components/InfoSection";
import IconSet from "../Components/IconSet";

export default function Acasa(props) {
  return (
    <div className={props.darkMode === "Dark" ? "bg-dark" : "bg-light"}>
      <div style={{ color: "white", textAlign: "center" }}>
        <h2>Cyanotech</h2>
        <p>
          {props.language === "English" &&
            "Laser Marking Machines, Laser Cleaning Machines and Laser Welding Machines"}
          {props.language === "Romanian" &&
            "Sisteme de Marcare Laser, Sisteme de Curățare Laser si Sisteme de Sudură Laser"}
          {props.language === "German" &&
            "Laserbeschriftungsgeräte, Laserreinigungsgeräte und Laserschweißgeräte"}
        </p>
      </div>
      <Carousel
        language={props.language}
        darkMode={props.darkMode}
        list={CarouselAcasaList}
      />
      <div
        className={
          props.darkMode === "Dark"
            ? "h3 text-center text-white pt-3"
            : "h3 text-center text-dark pt-3"
        }>
        {props.language === "English"
          ? "Quality products and services"
          : props.language === "Romanian"
          ? "Produse și servicii de calitate"
          : props.language === "German" &&
            "Qualitätsprodukte und Dienstleistungen"}
      </div>
      <div className='h3 text-center pb-5'>
        {props.language === "English" && (
          <a
            href='tel://+40727018165'
            style={{ textDecoration: "inherit", color: "cyan" }}>
            Call us 24/7
          </a>
        )}
        {props.language === "Romanian" && (
          <a
            href='tel://+40727018165'
            style={{ textDecoration: "inherit", color: "cyan" }}>
            Sunați-ne 24/7
          </a>
        )}
        {props.language === "German" && (
          <a
            href='tel://+40727018165'
            style={{ textDecoration: "inherit", color: "cyan" }}>
            Rufen Sie uns rund um die Uhr an
          </a>
        )}
      </div>
      <Container
        className='d-flex justify-content-between text-center flex-column flex-md-row rounded'
        style={{ gap: "10px" }}>
        {InfoSectionList.map((item) => (
          <InfoSectionCard
            key={item.id}
            darkMode={props.darkMode}
            img={item.img}
            title={
              props.language === "English"
                ? item.titleEN
                : props.languagae === "Romanian"
                ? item.titleRO
                : props.language === "German" && item.titleDE
            }
            text={
              props.language === "English"
                ? item.textEN
                : props.language === "Romanian"
                ? item.textRO
                : props.language === "German" && item.textDE
            }
          />
        ))}
      </Container>
      <p
        className={
          props.darkMode === "Dark"
            ? "text-center bg-dark text-light my-3"
            : "text-center bg-light text-dark my-3"
        }>
        {props.language === "English"
          ? "If you are searching for laser equipment we would like to have a discussion and support you with our consultancy."
          : props.language === "Romanian"
          ? "Dacă sunteți în căutare de aparatură laser ne-am bucura să purtăm o discuție și să vă venim în sprijin cu consultanță."
          : props.language === "German" &&
            "Wenn Sie auf der Suche nach Lasertechnologie sind, sprechen wir gerne mit Ihnen und bieten Ihnen unsere Beratung an."}
      </p>

      <Container>
        <InfoSection
          key={AcasaInfoComponentList1[0].id}
          darkMode={props.darkMode}
          language={props.language}
          title={
            props.language === "English"
              ? AcasaInfoComponentList1[0].titleEN
              : props.language === "Romanian"
              ? AcasaInfoComponentList1[0].titleRO
              : props.language === "German" &&
                AcasaInfoComponentList1[0].titleDE
          }
          icons={AcasaInfoComponentList1[0].icons}
          text={
            props.language === "English"
              ? AcasaInfoComponentList1[0].textEN
              : props.language === "Romanian"
              ? AcasaInfoComponentList1[0].textRO
              : props.language === "German" && AcasaInfoComponentList1[0].textDE
          }
          img={AcasaInfoComponentList1[0].img}
        />
      </Container>
      <Container>
        <IconSet language={props.language} darkMode={props.darkMode} />
      </Container>
      <div id='VideoSection'>
        <video
          id='background-video'
          autoPlay
          loop
          muted
          style={{ width: "100%", height: "50vh", objectFit: "cover" }}>
          <source src={HoloMarking} type='video/mp4' />
        </video>
      </div>
      <Container>
        <InfoSection
          key={AcasaInfoComponentList1[0].id}
          darkMode={props.darkMode}
          language={props.language}
          title={
            props.language === "English"
              ? AcasaInfoComponentList1[0].titleEN
              : props.language === "Romanian"
              ? AcasaInfoComponentList1[0].titleRO
              : props.language === "German" &&
                AcasaInfoComponentList1[0].titleDE
          }
          icons={AcasaInfoComponentList1[0].icons}
          text={
            props.language === "English"
              ? AcasaInfoComponentList1[0].textEN
              : props.language === "Romanian"
              ? AcasaInfoComponentList1[0].textRO
              : props.language === "German" && AcasaInfoComponentList1[0].textDE
          }
          img={AcasaInfoComponentList1[0].img}
        />
      </Container>
    </div>
  );
}
