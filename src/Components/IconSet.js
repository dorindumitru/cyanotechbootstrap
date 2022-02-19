import React from "react";
import eco from "../Resources/Icons/eco.png";
import faraReziduri from "../Resources/Icons/fara-reziduri.png";
import costuriReduse from "../Resources/Icons/costuri-reduse.png";
import faraConsumabile from "../Resources/Icons/fara-consumabile.png";

export default function IconSet(props) {
  return (
    <div
      style={{ gap: "5px" }}
      className='d-flex text-center py-3 align-items-center justify-content-center flex-column flex-sm-row'>
      <div
        className={
          props.darkmode === "Dark"
            ? "w-50 h100 bg-light rounded pt-2 d-flex flex-column align-items-center"
            : "w-50 h100 bg-dark rounded pt-2 d-flex flex-column align-items-center"
        }>
        <img src={eco} alt='eco' className='w-50 rounded' />
        <p
          className={
            props.darkmode === "Dark"
              ? "text-dark font-weight-bold"
              : "text-light font-weight-bold"
          }>
          {props.language === "English"
            ? "Eco-friendly"
            : props.language === "Romanian"
            ? "Prietenos cu mediul"
            : props.language === "German" && "Umweltfreundlich"}
        </p>
      </div>
      <div
        className={
          props.darkmode === "Dark"
            ? "w-50 h100 bg-light rounded pt-2 d-flex flex-column align-items-center"
            : "w-50 h100 bg-dark rounded pt-2 d-flex flex-column align-items-center"
        }>
        <img src={faraReziduri} alt='fara reziduri' className='w-50' />
        <p
          className={
            props.darkmode === "Dark"
              ? "text-dark font-weight-bold"
              : "text-light font-weight-bold"
          }>
          {props.language === "English"
            ? "No Residue"
            : props.language === "Romanian"
            ? "Fara Reziduri"
            : props.language === "German" && "Keine Abfälle"}
        </p>
      </div>
      <div
        className={
          props.darkmode === "Dark"
            ? "w-50 h100 bg-light rounded pt-2 d-flex flex-column align-items-center"
            : "w-50 h100 bg-dark rounded pt-2 d-flex flex-column align-items-center"
        }>
        <img src={costuriReduse} alt='costuri reduse' className='w-50' />
        <p
          className={
            props.darkmode === "Dark"
              ? "text-dark font-weight-bold"
              : "text-light font-weight-bold"
          }>
          {props.language === "English"
            ? "Low costs"
            : props.language === "Romanian"
            ? "Costuri reduse"
            : props.language === "German" && "Geringere Kosten"}
        </p>
      </div>
      <div
        className={
          props.darkmode === "Dark"
            ? "w-50 h100 bg-light rounded pt-2 d-flex flex-column align-items-center"
            : "w-50 h100 bg-dark rounded pt-2 d-flex flex-column align-items-center"
        }>
        <img src={faraConsumabile} alt='fara consumabile' className='w-50' />
        <p
          className={
            props.darkmode === "Dark"
              ? "text-dark font-weight-bold"
              : "text-light font-weight-bold"
          }>
          {props.language === "English"
            ? "No Consumables"
            : props.language === "Romanian"
            ? "Fara Consumabile"
            : props.language === "German" && "Kein Verbrauchsmaterial"}
        </p>
      </div>
    </div>
  );
}
