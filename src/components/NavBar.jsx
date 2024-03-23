import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import InputField from "./InputField";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="info">
        <Container fluid>
          <Navbar.Brand>
            <img
              className="rounded-circle"
              src="https://w7.pngwing.com/pngs/546/46/png-transparent-weather-forecasting-severe-weather-storm-weather-free-text-heart-logo-thumbnail.png"
              alt="logo"
              style={{ width: "60px" }}
            />{" "}
          </Navbar.Brand>
          <Nav className="me-auto navBar">
            <Link to="/Oggi" className="navLink mx-3">
              Previsioni di oggi
            </Link>

            <Link to="/prossimamente" className="navLink mx-3">
              Meteo per i prossimi giorni
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
