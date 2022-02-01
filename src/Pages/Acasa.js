import React from "react";
import Carousel from "../Components/Carousel";
import CyanoCleanPack from "../Resources/Products/CyanoClean/CyanoClean Backpack.png";
import CarouselAcasaList from "../Lists/CarouselAcasaList";

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
      <div className='h3 text-center text-white pt-3'>
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
    </div>
  );
}
