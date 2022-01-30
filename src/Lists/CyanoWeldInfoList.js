import React from "react";
import CyanoWeld1 from "../Resources/Products/CyanoWeld/CyanoWeld 1.png";
import CyanoWeld2 from "../Resources/Products/CyanoWeld/CyanoWeld 2.png";
import CyanoWeld3 from "../Resources/Products/CyanoWeld/CyanoWeld.png";
import CyanoWeld4 from "../Resources/Products/CyanoWeld/CyanoWeld 4.png";

const SuduraLaserEN = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <p>
        Now you can enjoy a fast welding process with minimal consumables, no
        excessive heat and without a high level of training needed. Transform
        welding into a game with the new CyanoWeld.
      </p>
      <p>What does the new CyanoWeld offer?</p>
      <p>Easy operation</p>
      <p>A beautiful and uniform welding line</p>
      <p>High welding speed</p>
    </div>
  );
};

const SuduraLaserRO = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <p>
        Acum vă puteți bucura de o sudură rapidă cu consumabile minimale, fără
        căldură excesivă si fără un nivel de experiență avansat necesar.
        Transformă sudura într-o joacă cu noul CyanoWeld.
      </p>
      <p>Ce aduce sistemul CyanoWeld nou? </p>
      <p>Operațiune ușoară</p>
      <p>O linie de sudură frumoasă și uniformă</p>
      <p>Viteză mare de sudură</p>
    </div>
  );
};

const SuduraLaserDE = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <p>
        Jetzt können Sie mit minimalem Verbrauchsmaterial schnell schweißen,
        dabei wird keine übermäßige Wärme erzeugt und auch der Schulungsaufwand
        ist gering. Mit dem neuen CyanoWeld werden Schweißarbeiten zu einem
        Kinderspiel.
      </p>
      <p>Was bietet das CyanoWeld-System?</p>
      <p>Einfache Bedienung</p>
      <p>Eine schöne und gleichmäßige Schweißnaht</p>
      <p>Hohe Schweißgeschwindigkeit</p>
    </div>
  );
};

const AdancimePenetrareEN = () => {
  return (
    <div style={{ textAlign: "start" }}>
      <p>1000w</p>
      <ul>
        <li>Stainless steel: 0.5 - 1.5mm</li>
        <li>Carbon steel: 0.5 - 1.5mm</li>
        <li>Galvanized sheet: 0.5 - 1.2mm</li>
      </ul>
      <p>1500w</p>
      <ul>
        <li>Stainless steel: 0.5 - 2mm</li>
        <li>Carbon steel: 0.5 - 3mm</li>
        <li>Galvanized sheet: 0.5 - 1.8mm</li>
      </ul>
      <p>2000w</p>
      <ul>
        <li>Stainless steel: 0.5 - 3mm</li>
        <li>Carbon steel: 0.5 - 3mm</li>
        <li>Galvanized sheet: 0.5 - 2.5mm</li>
      </ul>
    </div>
  );
};

const AdancimePenetrareRO = () => {
  return (
    <div style={{ textAlign: "start" }}>
      <p>1000w</p>
      <ul>
        <li>Oțel inoxidabil: 0.5 - 1.5mm</li>
        <li>Oțel carbon: 0.5 - 1.5mm</li>
        <li>Foaie galvanizată: 0.5 - 1.2mm</li>
      </ul>
      <p>1500w</p>
      <ul>
        <li>Oțel inoxidabil: 0.5 - 2mm</li>
        <li>Oțel carbon: 0.5 - 3mm</li>
        <li>Foaie galvanizată: 0.5 - 1.8mm</li>
      </ul>
      <p>2000w</p>
      <ul>
        <li>Oțel inoxidabil: 0.5 - 3mm</li>
        <li>Oțel carbon: 0.5 - 3mm</li>
        <li>Foaie galvanizată: 0.5 - 2.5mm</li>
      </ul>
    </div>
  );
};

const AdancimePenetrareDE = () => {
  return (
    <div style={{ textAlign: "start" }}>
      <p>1000w</p>
      <ul>
        <li>Edelstahl: 0.5 - 1.5mm</li>
        <li>Kohlenstoffstahl: 0.5 - 1.5mm</li>
        <li>Verzinktes Blech: 0.5 - 1.2mm</li>
      </ul>
      <p>1500w</p>
      <ul>
        <li>Edelstahl: 0.5 - 2mm</li>
        <li>Kohlenstoffstahl: 0.5 - 3mm</li>
        <li>Verzinktes Blech: 0.5 - 1.8mm</li>
      </ul>
      <p>2000w</p>
      <ul>
        <li>Edelstahl: 0.5 - 3mm</li>
        <li>Kohlenstoffstahl: 0.5 - 3mm</li>
        <li>Verzinktes Blech: 0.5 - 2.5mm</li>
      </ul>
    </div>
  );
};

const CyanoWeldInfoList = [
  {
    id: "1",
    titleEN: "Laser welding systems",
    titleRO: "Sisteme de sudură cu laser",
    titleDE: "Laserschweißsysteme",
    textEN: <SuduraLaserEN />,
    textRO: <SuduraLaserRO />,
    textDE: <SuduraLaserDE />,
    logo: CyanoWeld1,
  },
  {
    id: "2",
    titleEN: "What materials can be welded?",
    titleRO: "Ce materiale pot fi sudate?",
    titleDE: "Welche Materialien können geschweißt werden?",
    textEN:
      "CyanoWeld can be used to weld plaques of stainless steel, iron, aluminium, tin, carbon steel, etc. Fiber laser welding can easily replace traditional welding methods, without the need for long experience or prolongued training.",
    textRO:
      "Sistemul CyanoWeld poate suda în plăci de inox, fier, aluminiu, alamă, oțel carbon, etc. Sudura cu fibră laser poate înlocui cu ușurință tehnicile tradiționale de sudură, nefiind nevoie de experiență sau pregătire îndelungată.",
    textDE:
      "Das CyanoWeld-System kann Edelstahl, Eisen, Aluminium, Zinn, Kohlenstoffstahl usw. schweißen. Faserlaserschweißen kann problemlos herkömmliche Schweißmethoden ersetzen, ohne große Erfahrung oder lange Schulungen.",
    logo: CyanoWeld2,
    style: { flexDirection: "row-reverse" },
  },
  {
    id: "3",
    titleEN: "Penetration depth",
    titleRO: "Adâncime de penetrare:",
    titleDE: "Laserschweißsysteme",
    textEN: <AdancimePenetrareEN />,
    textRO: <AdancimePenetrareRO />,
    textDE: <AdancimePenetrareDE />,
    logo: CyanoWeld3,
  },
  {
    id: "4",
    titleEN: "Technical specifications",
    titleRO: "Mențiuni tehnice",
    titleDE: "Technische Daten",
    textEN:
      "Unlike traditional welding methods, the CyanoWeld systems generate less heat, do not deform the welded elements, ensures a very good binding which doesn't require polishing, all with a speed higher than double, compared to classical methods. The only consumables necessary are the ones necessary to any welding process, and that is shielding gas, such as nitrogen. The operation is a simple one which ensures a high degree of safety for the operator. Fiber laser welding is very eco friendly, not requiring toxic consumables.",
    textRO:
      "Spre deosebire de metodele de sudură tradiționale, sistemele CyanoWeld generează mai puțină căldură, nu deformează elementele sudate, asigură o îmbinare foarte bună ce nu necesită procesare ulterioară, totul cu o viteză mai mult decât dublă față de metodele clasice. Singurele consumabile necesare sunt cele necesare oricărui proces de sudură și anume gaz inert, cum ar fi azotul. Operarea sistemului este una simplă, ce asigură o siguranță superioară pentru operator. Sudura laser este una foarte prietenoasa cu mediul, neavând consumabile nocive.",
    textDE:
      "Im Gegensatz zu herkömmlichen Schweißmethoden erzeugt das CyanoWeld-System weniger Wärme, verformt die geschweißten Elemente nicht, gewährleistet eine gute Verbindung, die nicht poliert werden muss, und alles mit einer Geschwindigkeit, die doppelt so hoch ist wie bei herkömmlichen Methoden. Die einzigen benötigten Verbrauchsmaterialien sind die, die bei jedem Schweißvorgang benötigt werden, und das ist Schutzgas, wie z. B. Stickstoff. Die Bedienung ist einfach, wodurch ein hoher Grad an Sicherheit für den Bediener gewährleistet wird. Faserlaserschweißen ist äußerst umweltfreundlich, da keine giftigen Verbrauchsmaterialien benötigt werden.",
    logo: CyanoWeld4,
    style: { flexDirection: "row-reverse" },
  },
];

export default CyanoWeldInfoList;
