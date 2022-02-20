import React from "react";
import CyanoCleanList from "../Lists/CyanoCleanList";
import Carousel from "../Components/Carousel";
import InfoSection from "../Components/InfoSection";
import CyanoCleanInfoList from "../Lists/CyanoCleanInfoList";
import { Container } from "react-bootstrap";
import QuoteRequest from "../Components/QuoteRequest";
import CleanLogo from "../Resources/Products/CyanoClean/CyanoClean 60 100 150.png";

export default function CyanoClean(props) {
  return (
    <div
      className={
        props.darkmode === "Dark"
          ? "bg-dark text-center"
          : "bg-light text-center"
      }>
      <h1 className={props.darkmode === "Dark" ? "text-white" : "text-dark"}>
        CyanoClean
      </h1>
      <Carousel
        language={props.language}
        darkmode={props.darkmode}
        list={CyanoCleanList}
      />
      <Container>
        <InfoSection
          key={CyanoCleanInfoList[0].id}
          darkmode={props.darkmode}
          language={props.language}
          title={
            props.language === "English"
              ? CyanoCleanInfoList[0].titleEN
              : props.language === "Romanian"
              ? CyanoCleanInfoList[0].titleRO
              : props.language === "German" && CyanoCleanInfoList[0].titleDE
          }
          text={
            props.language === "English"
              ? CyanoCleanInfoList[0].textEN
              : props.language === "Romanian"
              ? CyanoCleanInfoList[0].textRO
              : props.language === "German" && CyanoCleanInfoList[0].textDE
          }
          img={CyanoCleanInfoList[0].img}
        />
      </Container>
      <Container>
        <InfoSection
          key={CyanoCleanInfoList[1].id}
          class={CyanoCleanInfoList[1].class}
          darkmode={props.darkmode}
          language={props.language}
          title={
            props.language === "English"
              ? CyanoCleanInfoList[1].titleEN
              : props.language === "Romanian"
              ? CyanoCleanInfoList[1].titleRO
              : props.language === "German" && CyanoCleanInfoList[1].titleDE
          }
          text={
            props.language === "English"
              ? CyanoCleanInfoList[1].textEN
              : props.language === "Romanian"
              ? CyanoCleanInfoList[1].textRO
              : props.language === "German" && CyanoCleanInfoList[0].textDE
          }
          img={CyanoCleanInfoList[1].img}
        />
      </Container>
      <Container>
        <InfoSection
          key={CyanoCleanInfoList[2].id}
          darkmode={props.darkmode}
          language={props.language}
          title={
            props.language === "English"
              ? CyanoCleanInfoList[2].titleEN
              : props.language === "Romanian"
              ? CyanoCleanInfoList[2].titleRO
              : props.language === "German" && CyanoCleanInfoList[2].titleDE
          }
          text={
            props.language === "English"
              ? CyanoCleanInfoList[2].textEN
              : props.language === "Romanian"
              ? CyanoCleanInfoList[2].textRO
              : props.language === "German" && CyanoCleanInfoList[2].textDE
          }
          img={CyanoCleanInfoList[2].img}
        />
      </Container>
      <Container>
        <InfoSection
          key={CyanoCleanInfoList[3].id}
          class={CyanoCleanInfoList[3].class}
          darkmode={props.darkmode}
          language={props.language}
          title={
            props.language === "English"
              ? CyanoCleanInfoList[3].titleEN
              : props.language === "Romanian"
              ? CyanoCleanInfoList[3].titleRO
              : props.language === "German" && CyanoCleanInfoList[3].titleDE
          }
          text={
            props.language === "English"
              ? CyanoCleanInfoList[3].textEN
              : props.language === "Romanian"
              ? CyanoCleanInfoList[3].textRO
              : props.language === "German" && CyanoCleanInfoList[3].textDE
          }
          img={CyanoCleanInfoList[3].img}
        />
      </Container>
      <QuoteRequest
        logo={CleanLogo}
        language={props.language}
        darkmode={props.darkmode}
      />
    </div>
  );
}
