import React from "react";
import Carousel from "../Components/Carousel";
import CyanoCleanPack from "../Resources/Products/CyanoClean/CyanoClean Backpack.png";

export default function Acasa(props) {
  const title = "test";
  const description = "test1";
  return (
    <div className={props.darkMode === "Dark" ? "bg-dark" : "bg-light"}>
      <Carousel
        language={props.language}
        darkMode={props.darkMode}
        img={CyanoCleanPack}
        title={title}
        description={description}
      />
    </div>
  );
}
