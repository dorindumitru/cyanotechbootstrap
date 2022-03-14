import "./App.css";
import logo from "./Resources/profile.png";
import "bootstrap/dist/css/bootstrap.css";
import {
  DropdownButton,
  Nav,
  Form,
  Navbar,
  NavDropdown,
  Dropdown,
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
  const [darkmode, setdarkmode] = useState("Dark");

  function toggleDark() {
    darkmode === "Dark" ? setdarkmode("Light") : setdarkmode("Dark");
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
        expand='lg'
        bg={darkmode === "Dark" ? "dark" : "light"}
        variant={darkmode === "Dark" ? "dark" : "light"}
        sticky='top'>
        <Navbar.Brand>
          <Nav.Link
            as={Link}
            to='/'
            style={{
              color: `${darkmode === "Dark" ? "white" : "black"}`,
              display: "flex",
            }}>
            <img src={logo} alt='Company Logo' height='40px' width='40px' />
            <p id='brandTitle' className='my-auto'>
              Cyanotech
            </p>
          </Nav.Link>
        </Navbar.Brand>
        <Form.Check
          className={darkmode === "Dark" ? "text-light" : "text-dark"}
          onClick={toggleDark}
          type='switch'
          id='custom-switch'
          label={
            darkmode === "Dark"
              ? language === "English"
                ? "Light"
                : language === "Romanian"
                ? "Luminat"
                : language === "German" && "Leuchtend"
              : language === "English"
              ? "Dark"
              : language === "Romanian"
              ? "Întunecat"
              : language === "German" && "Dunkel"
          }
        />
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
        <Navbar.Collapse
          id='responsive-navbar-nav'
          className='justify-content-end pe-3'>
          <Nav className='ml-auto'>
            <Nav.Link as={Link} to='/' href='/' style={{ textAlign: "right" }}>
              {language === "English"
                ? "Home"
                : language === "Romanian"
                ? "Acasă"
                : language === "German" && "Startseite"}
            </Nav.Link>
            <Nav.Link
              as={Link}
              to='/despre'
              href='/despre'
              style={{ textAlign: "right" }}>
              {language === "English"
                ? "About us"
                : language === "Romanian"
                ? "Despre noi"
                : language === "German" && "Über uns"}
            </Nav.Link>
            <NavDropdown
              menuVariant={darkmode === "Dark" ? "dark" : "light"}
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
                href='/cyanomark'
                style={{ textAlign: "right" }}>
                CyanoMark
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to='/cyanoclean'
                href='/cyanoclean'
                style={{ textAlign: "right" }}>
                CyanoClean
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to='/cyanoweld'
                href='/cyanoweld'
                style={{ textAlign: "right" }}>
                CyanoWeld
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              as={Link}
              to='/galerie-foto'
              href='/galerie-foto'
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
              href='/galerie-video'
              style={{ textAlign: "right" }}>
              {language === "English"
                ? "Video Gallery"
                : language === "Romanian"
                ? "Galerie Video"
                : language === "German" && "Videogallerie"}
            </Nav.Link>
            <Nav.Link
              as={Link}
              to='/contact'
              href='/contact'
              style={{ textAlign: "right" }}>
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
          element={<Acasa language={language} darkmode={darkmode} />}
        />
        <Route
          path='despre'
          element={<Despre language={language} darkmode={darkmode} />}
        />
        <Route
          path='produse'
          element={<Produse language={language} darkmode={darkmode} />}
        />
        <Route
          path='cyanomark'
          element={<CyanoMark language={language} darkmode={darkmode} />}
        />
        <Route
          path='cyanoclean'
          element={<CyanoClean language={language} darkmode={darkmode} />}
        />
        <Route
          path='cyanoweld'
          element={<CyanoWeld language={language} darkmode={darkmode} />}
        />
        <Route
          path='galerie-foto'
          element={<GalerieFoto language={language} darkmode={darkmode} />}
        />
        <Route
          path='galerie-video'
          element={<GalerieVideo language={language} darkmode={darkmode} />}
        />
        <Route
          path='contact'
          element={<Contact language={language} darkmode={darkmode} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
