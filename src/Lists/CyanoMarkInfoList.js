import React from "react";
import CyanoMarkPro50 from "../Resources/Products/CyanoMark/CyanoMark 50.png";
import CyanoMarkPro30 from "../Resources/Products/CyanoMark/CyanoMark 30.png";
import CyanoMarkMini from "../Resources/Products/CyanoMark/CyanoMark mini 2.png";
import CyanoMarkPortable from "../Resources/CyanoMark Portable.png";

const ApplicabilityEN = () => {
  return (
    <div>
      <p>
        Electronic components: resistors, chips, pcbs, keyboards, connectors
      </p>
      <p>Tools: workimg utilities, millimg tools, identifyimg plaques.</p>
      <p>
        Automotive industry: pistons, piston rimgs, cylinders, metallic and
        plastic components, bearimgs, etc.
      </p>
      <p>Mechanical parts: gears, bearimgs, engines, etc.</p>
      <p>Jewelry: gold, silver, stainless steel, tin.</p>
      <p>Recipients: PET bottles, produce bags, etc.</p>
    </div>
  );
};
const ApplicabilityRO = () => {
  return (
    <div>
      <p>
        Componente electronice: rezistențe, cipuri, PCB-uri, tastaturi,
        conectori
      </p>
      <p>Unelte: Scule de lucru, scule așchietoare, plăcuțe de identificare.</p>
      <p>
        Industria automotivă : pistoane, inele de pistoane, cilindri, componente
        metalice și din plastic, rulmenți, etc.
      </p>
      <p>Piese mecanice: Roți dințate, rulmenți, motoare, etc.</p>
      <p>Bijuterie: Aur, argint, inox, alamă.</p>
      <p>Ambalaje: PET-uri de plastic sau pungi de produse.</p>
    </div>
  );
};
const ApplicabilityDE = () => {
  return (
    <div>
      <p>
        Elektronische Bauteile: Widerstände, Chips, Leiterplatten, Tastaturen,
        Stecker.
      </p>
      <p>Werkzeuge: Arbeitshilfsmittel, Fräswerkzeuge, Typenschilder.</p>
      <p>
        Automobilindustrie: Kolben, Kolbenrimge, Zylinder, Metall- und
        Kunststoffteile, Lager usw.
      </p>
      <p>Mechanische Teile: Zahnräder, Lager, Motoren usw.</p>
      <p>Schmuck: Gold, Silber, Edelstahl, Zinn.</p>
      <p>Behälter: PET-Flaschen, Nahrungsmitteltaschen usw.</p>
    </div>
  );
};

const ApplicableMetalsEN = () => {
  return (
    <div>
      <h4>Metale marcabile</h4>
      <p>
        Metale: aluminiu, oțel, inox, magneziu, zinc, aur, argint, titaniu,
        aliaje, etc.
      </p>
      <p>Nemetale: plastic, cauciuc, răsină, carton, etc.</p>
      <h4>Avantaje</h4>
      <p>
        R&D: Design profesional și optimizare pentru a reduce dimensiunile și a
        menține unitatea portabilă. Garanție: 2 ani garanție cu suport tehnic
        permanent.
      </p>
    </div>
  );
};
const ApplicableMetalsRO = () => {
  return (
    <div>
      <h4>Metale marcabile</h4>
      <p>
        Metale: aluminiu, oțel, inox, magneziu, zinc, aur, argint, titaniu,
        aliaje, etc.
      </p>
      <p>Nemetale: plastic, cauciuc, răsină, carton, etc.</p>
      <h4>Avantaje:</h4>
      <p>
        R&D: Design profesional și optimizare pentru a reduce dimensiunile și a
        menține unitatea portabilă. Garanție: 2 ani garanție cu suport tehnic
        permanent.
      </p>
    </div>
  );
};
const ApplicableMetalsDE = () => {
  return (
    <div>
      <h4>Verwendbare Metalle:</h4>
      <p>
        Metalle: Aluminium, Stahl, Edelstahl, Magnesium, Zink, Gold, Silber,
        Titan, Legierungen usw.
      </p>
      <p>Nichtmetalle: Kunststoff, Gummi, Harz, Karton usw.</p>
      <h4>Vorteile:</h4>
      <p>
        FuE: Professionelles Design und Optimierung, um die Größe zu verrimgern
        und die Tragbarkeit zu erhalten. Garantie: 2 Jahre mit fortwährendem
        technischem Support.
      </p>
    </div>
  );
};

const CyanoMarkInfoList = [
  {
    id: "1",

    titleEN: "What is laser markimg?",
    titleRO: "Ce este marcarea laser?",
    titleDE: "Was ist Lasermarkierung?",
    textEN:
      "Laser markimg is the phenomenon through which a system concentrates a light beam in order to mark or engrave a part or a material. CyanoMark is a 2D laser marker which can mark and engrave parts or surfaces. The difference between markimg and engravimg consists in the depth of penetration of the material. Markimg is a slight discoloration of the surface and engravimg is the removal of a layer of material.",
    textRO:
      "Marcarea laser este fenomenul prin care un sistem concentrează o rază de lumină pentru a marca sau grava o piesă sau un material. CyanoMark este un sistem laser 2D ce poate marca si grava piese și suprafețe. Diferența dintre marcare și gravare constă în adâncimea de penetrare a materialului. Marcarea reprezintă o decolorare superficială a suprafeței iar gravarea reprezintă înlăturarea unui strat de material.",
    textDE:
      "Die Lasermarkierung ist ein Vorgang, bei dem eine System einen Lichtstrahl konzentriert, um ein Teil oder ein Material zu markieren oder zu gravieren. CyanoMark ist ein 2D-Lasermarkierer, der Teile oder Oberflächen markieren und gravieren kann. Der Unterschied zwischen Markieren und Gravieren besteht in der Eindrimgtiefe in das Material. Markieren ist eine gerimgfügige Verfärbung der Oberfläche und Gravieren ist das Entfernen einer Schicht des Materials.",
    img: CyanoMarkPro50,
  },
  {
    id: "2",
    class: "d-flex flex-column-reverse flex-lg-row-reverse py-3",
    titleEN: "Why use a laser marker?",
    titleRO: "De ce să folosim un marcator laser?",
    titleDE: "Warum einen Lasermarkierer verwenden?",
    textEN:
      "Laser markimg is a very resistant type of markimg which withstands the test of time. It is a permanent markimg made with the aid of numeric control which offers a high degree of precision and quality. Markimg can be done manually and automatically, the system beimg adaptable to the production line, it beimg able to connect to a PLC to receive the information which must be marked or to trigger the markimg.",
    textRO:
      "Marcarea laser este un tip foarte rezistent de marcare ce rezistă testului timpului. Este o marcare permanentă realizată cu ajutorul controlului numeric ce oferă un grad înalt de precizie si calitate. Seria CyanoWeld marchează cu precizie ±5μ și viteză de până la 14000mm/s. Marcarea se poate face manual sau automat, sistemul fiind adaptabil și liniei de producție, acesta putând fi conectat la PLC pentru a primi informația ce trebuie marcată sau a declanșa marcarea.",
    textDE:
      "Lasermarkierung ist eine äußerst widerstandsfähige Art des Markierens, die die Zeit überdauert. Es handelt sich um eine permanente Markierung, die mittels einer numerischen Steuerung aufgebracht wird, wodurch ein hoher Grad an Präzision und Qualität erreicht wird. Die Markierung kann manuell oder automatisch erfolgen. Das System kann an die Produktionslinie angepasst und mit einer SPS verbunden werden, um die zu markierenden Informationen zu empfangen oder die Markierung auszulösen.",
    img: CyanoMarkPro30,
  },
  {
    id: "3",
    titleEN: "Applicability",
    titleRO: "Aplicabilitate",
    titleDE: "Anwendungsbereiche",
    textEN: <ApplicabilityEN />,
    textRO: <ApplicabilityRO />,
    textDE: <ApplicabilityDE />,
    img: CyanoMarkMini,
  },
  {
    id: "4",
    class: "d-flex flex-column-reverse flex-lg-row-reverse py-3",
    textEN: <ApplicableMetalsEN />,
    textRO: <ApplicableMetalsRO />,
    textDE: <ApplicableMetalsDE />,
    style: { flexDirection: "row-reverse" },
    img: CyanoMarkPortable,
  },
];

export default CyanoMarkInfoList;
