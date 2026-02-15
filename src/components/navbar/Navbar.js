import "./Navbar.css";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import { isLogIn } from "../../utils";
function MyNavbar() {
  const [loginState, setLoginState] = useState(isLogIn() ? "خروج" : "ورود");
  const expand = "md";

  const logoutHandler=()=>{
    document.cookie = "username=admin; expires=Thu, 18 Dec 2000 12:00:00 UTC; path=/";
    setLoginState('ورود')
  }

  return (
    <Navbar
      style={{ backgroundColor: "#bab5fd" }}
      expand={expand}
      className="mb-3"
    >
      <Container fluid>
        <Navbar.Brand href="#" className="title ms-1">
          شرکت تور های مسافرتی
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3 me-5">
              <NavLink to="/" className="nav-link">
                صفحه اصلی
              </NavLink>
              <NavLink to="/about" className="nav-link">
                درباره ما
              </NavLink>
              <NavLink to="/article" className="nav-link">
                مقالات
              </NavLink>
              <NavLink to="/panel" className="nav-link">
                پنل
              </NavLink>
              {isLogIn() ? (
                <NavLink to="/login" onClick={logoutHandler} className="nav-link">
                  {loginState}
                </NavLink>
              ) : (
                <NavLink to="/login" className="nav-link">
                  {loginState}
                </NavLink>
              )}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
export default MyNavbar;
