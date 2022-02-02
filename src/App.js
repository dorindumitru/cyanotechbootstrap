import "./App.css";
import logo from "./Resources/profile.png";
import "bootstrap/dist/css/bootstrap.css";
import {
  DropdownButton,
  Nav,
  Navbar,
  NavDropdown,
  Dropdown,
  Button,
} from "react-bootstrap";
import Acasa from "./Pages/Acasa";
import Contact from "./Pages/Contact";
import CyanoClean from "./Pages/CyanoClean";
import CyanoMark from "./Pages/CyanoMark";
import CyanoWeld from "./Pages/CyanoWeld";
import Despre from "./Pages/Despre";
import GalerieFoto from "./Pages/GalerieFoto";
import GalerieVideo from "./Pages/GalerieVideo";
import Produse from "./Pages/Produse";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";

function App() {
  const [language, setLanguage] = useState("English");
  const [darkMode, setDarkMode] = useState("Dark");

  function toggleDark() {
    darkMode === "Dark" ? setDarkMode("Light") : setDarkMode("Dark");
  }

  return (
    <Router>
      <Navbar
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        collapseOnSelect
        expand='md'
        bg={darkMode === "Dark" ? "dark" : "light"}
        variant={darkMode === "Dark" ? "dark" : "light"}
        sticky='top'>
        <Navbar.Brand>
          <Nav.Link
            as={Link}
            to='/'
            style={{ color: `${darkMode === "Dark" ? "white" : "black"}` }}>
            <img src={logo} alt='Company Logo' height='40px' width='40px' />
            Cyanotech
          </Nav.Link>
        </Navbar.Brand>
        <Button
          type='button'
          bg={darkMode === "Dark" ? "dark" : "light"}
          variant={darkMode === "Dark" ? "dark" : "light"}
          onClick={toggleDark}
          className={
            darkMode === "Dark"
              ? "btn btn-sm me-1 btn-outline-light"
              : "btn btn-sm me-1 btn-outline-dark"
          }>
          {darkMode === "Dark"
            ? language === "English"
              ? "Light"
              : language === "Romanian"
              ? "Luminat"
              : language === "German" && "Leuchtend"
            : language === "English"
            ? "Dark"
            : language === "Romanian"
            ? "Întunecat"
            : language === "German" && "Dunkel"}
        </Button>
        <DropdownButton size='sm' title={language} className='ms-1'>
          <Dropdown.Item onClick={() => setLanguage("English")}>
            English
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setLanguage("Romanian")}>
            Romanian
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setLanguage("German")}>
            German
          </Dropdown.Item>
        </DropdownButton>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end pe-3'>
          <Nav className='ml-auto'>
            <Nav.Link as={Link} to='/' style={{ textAlign: "right" }}>
              {language === "English"
                ? "Home"
                : language === "Romanian"
                ? "Acasă"
                : language === "German" && "Startseite"}
            </Nav.Link>
            <Nav.Link as={Link} to='/despre' style={{ textAlign: "right" }}>
              {language === "English"
                ? "About us"
                : language === "Romanian"
                ? "Despre noi"
                : language === "German" && "Über uns"}
            </Nav.Link>
            <NavDropdown
              menuVariant={darkMode === "Dark" ? "dark" : "light"}
              title={
                language === "English"
                  ? "Products"
                  : language === "Romanian"
                  ? "Produse"
                  : language === "German" && "Produkte"
              }
              style={{ textAlign: "right" }}>
              <NavDropdown.Item
                as={Link}
                to='/cyanomark'
                style={{ textAlign: "right" }}>
                CyanoMark
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to='/cyanoclean'
                style={{ textAlign: "right" }}>
                CyanoClean
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to='/cyanoweld'
                style={{ textAlign: "right" }}>
                CyanoWeld
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              as={Link}
              to='/galerie-foto'
              style={{ textAlign: "right" }}>
              {language === "English"
                ? "Photo Gallery"
                : language === "Romanian"
                ? "Galerie Foto"
                : language === "German" && "Fotogallerie"}
            </Nav.Link>
            <Nav.Link
              as={Link}
              to='/galerie-video'
              style={{ textAlign: "right" }}>
              {language === "English"
                ? "Video Gallery"
                : language === "Romanian"
                ? "Galerie Video"
                : language === "German" && "Videogallerie"}
            </Nav.Link>
            <Nav.Link as={Link} to='/contact' style={{ textAlign: "right" }}>
              {language === "English"
                ? "Contact"
                : language === "Romanian"
                ? "Contact"
                : language === "German" && "Kontakt"}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes>
        <Route
          exact
          path='/'
          element={<Acasa language={language} darkMode={darkMode} />}
        />
        <Route
          path='despre'
          element={<Despre language={language} darkMode={darkMode} />}
        />
        <Route
          path='produse'
          element={<Produse language={language} darkMode={darkMode} />}
        />
        <Route
          path='cyanomark'
          element={<CyanoMark language={language} darkMode={darkMode} />}
        />
        <Route
          path='cyanoclean'
          element={<CyanoClean language={language} darkMode={darkMode} />}
        />
        <Route
          path='cyanoweld'
          element={<CyanoWeld language={language} darkMode={darkMode} />}
        />
        <Route
          path='galerie-foto'
          element={<GalerieFoto language={language} darkMode={darkMode} />}
        />
        <Route
          path='galerie-video'
          element={<GalerieVideo language={language} darkMode={darkMode} />}
        />
        <Route
          path='contact'
          element={<Contact language={language} darkMode={darkMode} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
