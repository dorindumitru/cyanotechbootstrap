import React from "react";
import Carousel from "../Components/Carousel";
import CarouselAcasaList from "../Lists/CarouselAcasaList";
import InfoSectionList from "../Lists/InfoSectionList";
import InfoSectionCard from "../Components/InfoSectionCard";
import { Container } from "react-bootstrap";
import HoloMarking from "../Resources/HoloMarking.mp4";
import AcasaInfoComponentList1 from "../Lists/AcasaInfoComponentList1";
import AcasaInfoComponentList2 from "../Lists/AcasaInfoComponentList2";
import InfoSection from "../Components/InfoSection";
import IconSet from "../Components/IconSet";
import Footer from "../Components/Footer";
import HeroLight from "../Resources/hero light.png";
import HeroDark from "../Resources/hero dark.jpg";

export default function Acasa(props) {
  return (
    <div className={props.darkmode === "Dark" ? "bg-dark" : "bg-light"}>
      <div style={{ color: "white", textAlign: "center" }}>
        <img
          className='w-100'
          src={props.darkmode === "Dark" ? HeroDark : HeroLight}
          alt='hero'
        />
        <h2 className={props.darkmode === "Dark" ? "text-light" : "text-dark"}>
          Cyanotech
        </h2>
        <p className={props.darkmode === "Dark" ? "text-light" : "text-dark"}>
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
        darkmode={props.darkmode}
        list={CarouselAcasaList}
      />
      <div
        className={
          props.darkmode === "Dark"
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
            darkmode={props.darkmode}
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
          props.darkmode === "Dark"
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
          darkmode={props.darkmode}
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
        <IconSet language={props.language} darkmode={props.darkmode} />
      </Container>
      <Container>
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
      </Container>
      <Container>
        <InfoSection
          key={AcasaInfoComponentList2[0].id}
          darkmode={props.darkmode}
          language={props.language}
          title={
            props.language === "English"
              ? AcasaInfoComponentList2[0].titleEN
              : props.language === "Romanian"
              ? AcasaInfoComponentList2[0].titleRO
              : props.language === "German" &&
                AcasaInfoComponentList2[0].titleDE
          }
          icons={AcasaInfoComponentList2[0].icons}
          text={
            props.language === "English"
              ? AcasaInfoComponentList2[0].textEN
              : props.language === "Romanian"
              ? AcasaInfoComponentList2[0].textRO
              : props.language === "German" && AcasaInfoComponentList2[0].textDE
          }
          img={AcasaInfoComponentList2[0].img}
          button={
            props.language === "English"
              ? AcasaInfoComponentList2[0].detailsEN
              : props.language === "Romanian"
              ? AcasaInfoComponentList2[0].detailsRO
              : props.language === "German" &&
                AcasaInfoComponentList2[0].detailsDE
          }
          buttonLink='/despre'
        />
      </Container>

      <Footer language={props.language} darkmode={props.darkmode} />
    </div>
  );
}
