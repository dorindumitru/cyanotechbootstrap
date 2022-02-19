import React from "react";
import CyanoMarkList from "../Lists/CyanoMarkList";
import Carousel from "../Components/Carousel";
import InfoSection from "../Components/InfoSection";
import CyanoMarkInfoList from "../Lists/CyanoMarkInfoList";
import { Container } from "react-bootstrap";

export default function CyanoMark(props) {
  return (
    <div
      className={
        props.darkmode === "Dark"
          ? "bg-dark text-center"
          : "bg-light text-center"
      }>
      <h1 className={props.darkmode === "Dark" ? "text-white" : "text-dark"}>
        CyanoMark
      </h1>
      <Carousel
        language={props.language}
        darkmode={props.darkmode}
        list={CyanoMarkList}
      />
      <Container>
        <InfoSection
          key={CyanoMarkInfoList[0].id}
          darkmode={props.darkmode}
          language={props.language}
          title={
            props.language === "English"
              ? CyanoMarkInfoList[0].titleEN
              : props.language === "Romanian"
              ? CyanoMarkInfoList[0].titleRO
              : props.language === "German" && CyanoMarkInfoList[0].titleDE
          }
          text={
            props.language === "English"
              ? CyanoMarkInfoList[0].textEN
              : props.language === "Romanian"
              ? CyanoMarkInfoList[0].textRO
              : props.language === "German" && CyanoMarkInfoList[0].textDE
          }
          img={CyanoMarkInfoList[0].img}
        />
      </Container>
      <Container>
        <InfoSection
          key={CyanoMarkInfoList[1].id}
          darkmode={props.darkmode}
          language={props.language}
          class={CyanoMarkInfoList[1].class}
          title={
            props.language === "English"
              ? CyanoMarkInfoList[1].titleEN
              : props.language === "Romanian"
              ? CyanoMarkInfoList[1].titleRO
              : props.language === "German" && CyanoMarkInfoList[1].titleDE
          }
          text={
            props.language === "English"
              ? CyanoMarkInfoList[1].textEN
              : props.language === "Romanian"
              ? CyanoMarkInfoList[1].textRO
              : props.language === "German" && CyanoMarkInfoList[1].textDE
          }
          img={CyanoMarkInfoList[1].img}
        />
      </Container>
      <Container>
        <InfoSection
          key={CyanoMarkInfoList[2].id}
          darkmode={props.darkmode}
          language={props.language}
          title={
            props.language === "English"
              ? CyanoMarkInfoList[2].titleEN
              : props.language === "Romanian"
              ? CyanoMarkInfoList[2].titleRO
              : props.language === "German" && CyanoMarkInfoList[2].titleDE
          }
          text={
            props.language === "English"
              ? CyanoMarkInfoList[2].textEN
              : props.language === "Romanian"
              ? CyanoMarkInfoList[2].textRO
              : props.language === "German" && CyanoMarkInfoList[2].textDE
          }
          img={CyanoMarkInfoList[2].img}
        />
      </Container>
    </div>
  );
}
