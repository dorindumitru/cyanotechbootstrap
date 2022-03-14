import React, { useState } from "react";
import "./GalerieFoto.css";
import CyanoMarkPro1 from "../Resources/Products/CyanoMark/Pro/CyanoMark 20.png";
import CyanoMarkPro2 from "../Resources/Products/CyanoMark/Pro/CyanoMark 30.png";
import CyanoMarkPro3 from "../Resources/Products/CyanoMark/Pro/CyanoMark 50.png";
import CyanoMarkPro4 from "../Resources/Products/CyanoMark/Pro/CyanoMark 100.png";
import CyanoMarkPro5 from "../Resources/Products/CyanoMark/Pro/CyanoMark 100 1.png";
import CyanoMarkMini1 from "../Resources/Products/CyanoMark/Mini/CyanoMark mini 1.png";
import CyanoMarkMini2 from "../Resources/Products/CyanoMark/Mini/CyanoMark mini 2.png";
import CyanoMarkMini3 from "../Resources/Products/CyanoMark/Mini/CyanoMark mini 3.png";
import CyanoMarkMini4 from "../Resources/Products/CyanoMark/Mini/CyanoMark mini 4.png";
import CyanoMarkMini5 from "../Resources/Products/CyanoMark/Mini/CyanoMark mini 5.png";
import CyanoMarkMini6 from "../Resources/Products/CyanoMark/Mini/CyanoMark mini 6.png";
import CyanoMarkPortable from "../Resources/Products/CyanoMark/Portable/CyanoMark portable.png";
import CyanoClean1 from "../Resources/Products/CyanoClean/CyanoClean 60 100 150.png";
import CyanoClean2 from "../Resources/Products/CyanoClean/CyanoClean 60.png";
import CyanoClean3 from "../Resources/Products/CyanoClean/CyanoClean 80.png";
import CyanoClean4 from "../Resources/Products/CyanoClean/CyanoClean 100.png";
import CyanoClean5 from "../Resources/Products/CyanoClean/CyanoClean 150.png";
import CyanoClean6 from "../Resources/Products/CyanoClean/CyanoClean 200.png";
import CyanoClean7 from "../Resources/Products/CyanoClean/CyanoClean 300.png";
import CyanoClean8 from "../Resources/Products/CyanoClean/CyanoClean 500.png";
import CyanoClean9 from "../Resources/Products/CyanoClean/CyanoClean Backpack.png";
import CyanoClean10 from "../Resources/Products/CyanoClean/CyanoClean Backpack 1.png";
import CyanoClean11 from "../Resources/Products/CyanoClean/CyanoClean Backpack 2.png";
import CyanoClean12 from "../Resources/Products/CyanoClean/CyanoClean Backpack 3.png";
import CyanoClean13 from "../Resources/Products/CyanoClean/CyanoClean Backpack 4.png";
import CyanoWeld1 from "../Resources/Products/CyanoWeld/CyanoWeld.png";
import CyanoWeld2 from "../Resources/Products/CyanoWeld/CyanoWeld 1.png";
import CyanoWeld3 from "../Resources/Products/CyanoWeld/CyanoWeld 2.png";
import CyanoWeld4 from "../Resources/Products/CyanoWeld/CyanoWeld 3.png";
import CyanoWeld5 from "../Resources/Products/CyanoWeld/CyanoWeld 4.png";

import { Container, CloseButton } from "react-bootstrap";

const CyanoMarkPro = [
  {
    id: 1,
    img: CyanoMarkPro1,
  },
  {
    id: 2,
    img: CyanoMarkPro2,
  },
  {
    id: 3,
    img: CyanoMarkPro3,
  },
  {
    id: 4,
    img: CyanoMarkPro4,
  },
  {
    id: 5,
    img: CyanoMarkPro5,
  },
];

const CyanoMarkMini = [
  {
    id: "1",
    img: CyanoMarkMini1,
  },
  {
    id: "2",
    img: CyanoMarkMini2,
  },
  {
    id: "3",
    img: CyanoMarkMini3,
  },
  {
    id: "4",
    img: CyanoMarkMini4,
  },
  {
    id: "5",
    img: CyanoMarkMini5,
  },
  {
    id: "6",
    img: CyanoMarkMini6,
  },
];

const CyanoMarkPort = [
  {
    id: "1",
    img: CyanoMarkPortable,
  },
];

const CyanoClean = [
  {
    id: "1",
    img: CyanoClean1,
  },
  {
    id: "2",
    img: CyanoClean2,
  },
  {
    id: "3",
    img: CyanoClean3,
  },
  {
    id: "4",
    img: CyanoClean4,
  },
  {
    id: "5",
    img: CyanoClean5,
  },
  {
    id: "6",
    img: CyanoClean6,
  },
  {
    id: "7",
    img: CyanoClean7,
  },
  {
    id: "8",
    img: CyanoClean8,
  },
  {
    id: "9",
    img: CyanoClean9,
  },
  {
    id: "10",
    img: CyanoClean10,
  },
  {
    id: "11",
    img: CyanoClean11,
  },
  {
    id: "12",
    img: CyanoClean12,
  },
  {
    id: "1",
    img: CyanoClean13,
  },
];

const CyanoWeld = [
  {
    id: "1",
    img: CyanoWeld1,
  },
  {
    id: "2",
    img: CyanoWeld2,
  },
  {
    id: "3",
    img: CyanoWeld3,
  },
  {
    id: "4",
    img: CyanoWeld4,
  },
  {
    id: "5",
    img: CyanoWeld5,
  },
];

export default function GalerieFoto(props) {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");
  const getImg = (img) => {
    setTempImgSrc(img);
    setModel(true);
  };

  return (
    <div
      className={
        props.darkmode === "Dark" ? "bg-dark text-light" : "bg-light text-dark"
      }>
      <Container>
        <div>
          <h3 style={{ textAlign: "center" }}>CyanoMark Pro</h3>
          <div className={model ? "model open" : "model"}>
            <CloseButton
              variant='white'
              onClick={() => setModel(false)}
              className='align-self-end p-2'
            />
            <img src={tempImgSrc} alt='galerie foto' />
          </div>
          <div className='GalerieFoto'>
            {CyanoMarkPro.map((item, index) => {
              return (
                <div
                  className='pics'
                  key={index}
                  onClick={() => getImg(item.img)}>
                  <img
                    src={item.img}
                    alt='Images gallery'
                    style={{ width: "100%" }}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h3 style={{ textAlign: "center" }}>CyanoMark Mini</h3>
          <div className={model ? "model open" : "model"}>
            <CloseButton
              variant='white'
              onClick={() => setModel(false)}
              className='align-self-end p-5'
            />
            <img src={tempImgSrc} alt='galerie foto' />
          </div>
          <div className='GalerieFoto'>
            {CyanoMarkMini.map((item, index) => {
              return (
                <div
                  className='pics'
                  key={index}
                  onClick={() => getImg(item.img)}>
                  <img
                    src={item.img}
                    alt='Images gallery'
                    style={{ width: "100%" }}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h3 style={{ textAlign: "center" }}>CyanoMark Portable</h3>
          <div className={model ? "model open" : "model"}>
            <CloseButton
              variant='white'
              onClick={() => setModel(false)}
              className='align-self-end p-5'
            />
            <img src={tempImgSrc} alt='galerie foto' />
          </div>
          <div className='GalerieFoto'>
            {CyanoMarkPort.map((item, index) => {
              return (
                <div
                  className='pics'
                  key={index}
                  onClick={() => getImg(item.img)}>
                  <img
                    src={item.img}
                    alt='Images gallery'
                    style={{ width: "100%" }}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h3 style={{ textAlign: "center" }}>CyanoClean</h3>
          <div className={model ? "model open" : "model"}>
            <CloseButton
              variant='white'
              onClick={() => setModel(false)}
              className='align-self-end p-5'
            />
            <img src={tempImgSrc} alt='galerie foto' />
          </div>
          <div className='GalerieFoto'>
            {CyanoClean.map((item, index) => {
              return (
                <div
                  className='pics'
                  key={index}
                  onClick={() => getImg(item.img)}>
                  <img
                    src={item.img}
                    alt='Images gallery'
                    style={{ width: "100%" }}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h3 style={{ textAlign: "center" }}>CyanoWeld</h3>
          <div className={model ? "model open" : "model"}>
            <CloseButton
              variant='white'
              onClick={() => setModel(false)}
              className='align-self-end p-5'
            />
            <img src={tempImgSrc} alt='Images gallery' />
          </div>
          <div className='GalerieFoto'>
            {CyanoWeld.map((item, index) => {
              return (
                <div
                  className='pics'
                  key={index}
                  onClick={() => getImg(item.img)}>
                  <img
                    src={item.img}
                    alt='Images gallery'
                    style={{ width: "100%" }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}
