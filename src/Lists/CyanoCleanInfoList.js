import React from "react";
import CyanoCleanBackPack from "../Resources/Products/CyanoClean/CyanoClean Backpack.png";
import CyanoClean80 from "../Resources/Products/CyanoClean/CyanoClean 80.png";
import CyanoClean150 from "../Resources/Products/CyanoClean/CyanoClean 150.png";
import CyanoClean200 from "../Resources/Products/CyanoClean/CyanoClean 200.png";

const AvantajeEN = () => {
  return (
    <ul>
      <li>Contactless cleaning</li>
      <li>Efficient and safe cleaning</li>
      <li>
        Different ways of cleaning ensure a deep cleaning in the most difficult
        to reach areas.
      </li>
      <li>High quality engines ensure a fast cleaning</li>
    </ul>
  );
};

const AvantajeRO = () => {
  return (
    <ul>
      <li>Curățare industrială fără contact,</li>
      <li>Curățare eficientă și în sigranță,</li>
      <li>
        Moduri diferite de curățare asigură o curățare în profunzime în cele mai
        dificile zone,
      </li>
      <li>Motoare de înaltă calitate asigură o curățare rapidă.</li>
    </ul>
  );
};

const AvantajeDE = () => {
  return (
    <ul>
      <li>Kontaktlose industrielle Reinigung</li>
      <li>Effiziente und sichere Reinigung</li>
      <li>
        Verschiedene Reinigungsmodi bieten eine Tiefenreinigung in den
        schwierigsten Bereichen
      </li>
      <li>
        Qualitativ hochwertige Motoren gewährleisten eine schnelle Reinigung
      </li>
    </ul>
  );
};

const AplicabilitateEN = () => {
  return (
    <ul>
      <li>Precise removal of layers of paint</li>
      <li>Natural cleaning of stone</li>
      <li>Removal of rust / oxidation</li>
      <li>Removal of oily residue</li>
      <li>Printing roll cleaning</li>
      <li>In-line cleaning of various components</li>
      <li>Nuclear decontamination</li>
    </ul>
  );
};

const AplicabilitateRO = () => {
  return (
    <ul>
      <li>Înlăturare precisă de straturi de vopsea</li>
      <li>Curățare naturală a pietrei</li>
      <li>Înlăturare de rugină / oxidare</li>
      <li>Înlăturare de depuneri uleioase</li>
      <li>Curățare role printare</li>
      <li>Curățare în linie a diferite componente</li>
      <li>Decontaminare nucleară</li>
    </ul>
  );
};

const AplicabilitateDE = () => {
  return (
    <ul>
      <li>Präzise Entfernung von Farbschichten</li>
      <li>Natürliche Reinigung von Steinen</li>
      <li>Entfernung von Rost/Oxidierung</li>
      <li>Entfernung von Ölrückständen</li>
      <li>Reinigung von Druckwalzen</li>
      <li>Inline-Reinigung verschiedener Bauteile</li>
      <li>Nukleare Dekontaminierung</li>
    </ul>
  );
};

const CyanoCleanInfoList = [
  {
    id: "1",
    titleEN: "Laser cleaning",
    titleRO: "Curățare cu Laser",
    titleDE: "Laserreinigung",
    textEN:
      "Laser cleaning is the process through which contaminants, impurities or residue are cleaned off the surface by using laser iradiation. This is a technique that is eco friendly and with low costs which is used on a large scale in the global industry. ",
    textRO:
      "Curățarea cu laser este procesul prin care contaminanți, impurități sau mizerie(ex: carbon, silicon și cauciuc) sunt curățate de pe suprafață prin folosirea iradiației laser. Aceasta este o tehnică de aplicație laser ecologică cu costuri reduse, care este utilizată pe scară largă în întreaga industrie globală. ",
    textDE:
      "Laserreinigung ist ein Prozess, durch den Verunreinigungen, Fremdkörper oder Schmutz (z. B. Kohlenstoff, Silikon und Gummi) mittels Laserbestrahlung von Oberflächen entfernt werden. Diese Lasertechnik ist umweltfreundlich und kostengünstig und wird weltweit in großem Umfang in der Industrie eingesetzt.",
    img: CyanoCleanBackPack,
  },
  {
    id: "2",
    class: "d-flex flex-column-reverse flex-lg-row-reverse py-3",
    titleEN: "Advantages:",
    titleRO: "Avantaje",
    titleDE: "Vorteile",
    textEN: <AvantajeEN />,
    textRO: <AvantajeRO />,
    textDE: <AvantajeDE />,
    img: CyanoClean80,
    style: { flexDirection: "row-reverse" },
  },
  {
    id: "3",
    titleEN: "",
    titleRO: "",
    titleDE: "",
    textEN:
      "CyanoClean is a top product in the field of professional cleaning. It is an easy to operate system which can do the job as soon as it is plugged in, not needing any additional substances or consumables.",
    textRO:
      "CyanoClean este un produs de top in domeniul curățărilor profesionale. Acesta este un sistem ușor de operat ce poate să iși facă treaba de cum este conectat la curent, neavând nevoie de substanțe adiționale sau consumabile. ",
    textDE:
      "CyanoClean ist ein Top-Produkt im Bereich der professionellen Reinigung. Es ist ein einfach zu bedienendes System, das sofort nach dem Einstecken die Arbeit aufnehmen kann, ohne dass zusätzliche Stoffe oder Verbrauchsmaterialien benötigt werden.",
    img: CyanoClean150,
  },
  {
    id: "4",
    class: "d-flex flex-column-reverse flex-lg-row-reverse py-3",
    titleEN: "Applicability",
    titleRO: "Aplicabilitate",
    titleDE: "Anwendungsbereiche",
    textEN: <AplicabilitateEN />,
    textRO: <AplicabilitateRO />,
    textDE: <AplicabilitateDE />,
    img: CyanoClean200,
    style: { flexDirection: "row-reverse" },
  },
];

export default CyanoCleanInfoList;
