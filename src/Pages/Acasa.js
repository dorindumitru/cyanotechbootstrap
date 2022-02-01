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
    </div>
  );
}
