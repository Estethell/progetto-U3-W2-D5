import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { useEffect } from "react";

const Body = ({ città, fetch }) => {
  if (città === null || città.hasOwnProperty("list")) {
    return (
      <Container className="d-flex justify-content-center text-body-tertiary">
        <h1>Inserisci un nome di città valido</h1>
      </Container>
    );
  } else {
    const immagine = "https://openweathermap.org/img/wn/" + città.weather[0].icon + "@2x.png";
    const data = new Date();
    console.log("ciao");
    return (
      <Container className="countainerBody">
        <Row>
          <Col className="flex-column text-center">
            <h2 className="data1 text-body-tertiary">{data.toLocaleDateString()}</h2>

            <div className="d-flex justify-content-center">
              <h6 className=" text-body-tertiary me-2 mb-0">
                {"Massima " + (città.main.temp_max - 273.15).toFixed(1) + "C°"}
              </h6>
              <h6 className=" text-body-tertiary mx-2 mb-0">
                {"Minima " + (città.main.temp_min - 273.15).toFixed(1) + "C°"}
              </h6>
            </div>

            <h1 className="data2 text-body-tertiary m-0 ">{(città.main.temp - 273.15).toFixed(1) + "C°"}</h1>

            <h4 className=" text-body-tertiary">{"Umidità " + città.main.humidity + "%"}</h4>
          </Col>

          <Col className=" d-flex flex-column align-items-center">
            <img src={immagine} alt="tempo" style={{ width: "200px" }} />
            <h2 className="text-body-tertiary">{città.weather[0].description}</h2>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default Body;
