import React from "react";
import CyanoWeldList from "../Lists/CyanoWeldList";
import Carousel from "../Components/Carousel";
import InfoSection from "../Components/InfoSection";
import CyanoWeldInfoList from "../Lists/CyanoWeldInfoList";
import { Container } from "react-bootstrap";
import QuoteRequest from "../Components/QuoteRequest";
import WeldLogo from "../Resources/Products/CyanoWeld/CyanoWeld 1.png";

export default function CyanoWeld(props) {
  return (
    <div
      className={
        props.darkmode === "Dark"
          ? "bg-dark text-center"
          : "bg-light text-center"
      }>
      <h1 className={props.darkmode === "Dark" ? "text-white" : "text-dark"}>
        CyanoWeld
      </h1>
      <Carousel
        language={props.language}
        darkmode={props.darkmode}
        list={CyanoWeldList}
      />
      <Container>
        <InfoSection
          key={CyanoWeldInfoList[0].id}
          darkmode={props.darkmode}
          language={props.language}
          title={
            props.language === "English"
              ? CyanoWeldInfoList[0].titleEN
              : props.language === "Romanian"
              ? CyanoWeldInfoList[0].titleRO
              : props.language === "German" && CyanoWeldInfoList[0].titleDE
          }
          text={
            props.language === "English"
              ? CyanoWeldInfoList[0].textEN
              : props.language === "Romanian"
              ? CyanoWeldInfoList[0].textRO
              : props.language === "German" && CyanoWeldInfoList[0].textDE
          }
          img={CyanoWeldInfoList[0].img}
        />
      </Container>
      <Container>
        <InfoSection
          key={CyanoWeldInfoList[1].id}
          class={CyanoWeldInfoList[1].class}
          darkmode={props.darkmode}
          language={props.language}
          title={
            props.language === "English"
              ? CyanoWeldInfoList[1].titleEN
              : props.language === "Romanian"
              ? CyanoWeldInfoList[1].titleRO
              : props.language === "German" && CyanoWeldInfoList[1].titleDE
          }
          text={
            props.language === "English"
              ? CyanoWeldInfoList[1].textEN
              : props.language === "Romanian"
              ? CyanoWeldInfoList[1].textRO
              : props.language === "German" && CyanoWeldInfoList[0].textDE
          }
          img={CyanoWeldInfoList[1].img}
        />
      </Container>
      <Container>
        <InfoSection
          key={CyanoWeldInfoList[2].id}
          darkmode={props.darkmode}
          language={props.language}
          title={
            props.language === "English"
              ? CyanoWeldInfoList[2].titleEN
              : props.language === "Romanian"
              ? CyanoWeldInfoList[2].titleRO
              : props.language === "German" && CyanoWeldInfoList[2].titleDE
          }
          text={
            props.language === "English"
              ? CyanoWeldInfoList[2].textEN
              : props.language === "Romanian"
              ? CyanoWeldInfoList[2].textRO
              : props.language === "German" && CyanoWeldInfoList[2].textDE
          }
          img={CyanoWeldInfoList[2].img}
        />
      </Container>
      <Container>
        <InfoSection
          key={CyanoWeldInfoList[3].id}
          class={CyanoWeldInfoList[3].class}
          darkmode={props.darkmode}
          language={props.language}
          title={
            props.language === "English"
              ? CyanoWeldInfoList[3].titleEN
              : props.language === "Romanian"
              ? CyanoWeldInfoList[3].titleRO
              : props.language === "German" && CyanoWeldInfoList[3].titleDE
          }
          text={
            props.language === "English"
              ? CyanoWeldInfoList[3].textEN
              : props.language === "Romanian"
              ? CyanoWeldInfoList[3].textRO
              : props.language === "German" && CyanoWeldInfoList[3].textDE
          }
          img={CyanoWeldInfoList[3].img}
        />
      </Container>
      <QuoteRequest
        logo={WeldLogo}
        language={props.language}
        darkmode={props.darkmode}
      />
    </div>
  );
}
