import { Container, Row, Col } from "react-bootstrap";

const Prossimamente = ({ città }) => {
  if (città === null || città.list === undefined) {
    return (
      <Container className="d-flex justify-content-center text-body-tertiary">
        <h1>Non ci sono previsioni disponibili</h1>
      </Container>
    );
  } else {
    const giorno = new Date();
    const immagine = (e) => {
      return "https://openweathermap.org/img/wn/" + e + "@2x.png";
    };
    const newDate = (i) => {
      debugger;
      giorno.setDate(giorno.getDate() + 1);
      return giorno.toDateString();
    };
    return (
      <Container>
        {città.list.map((e, i) => {
          return (
            <Row key={i} className="border-top border-tertiary d-flex">
              <Col id="1" className="my-3 ">
                <div className="text-center">{newDate(i)}</div>
              </Col>

              <Col id="2" className="my-3 ">
                <div className="text-center">
                  <img src={immagine(e.weather[0].icon)} alt="tempo" style={{ width: "70px" }} />
                </div>
              </Col>

              <Col id="3" className="my-3 ">
                <div className="text-center">
                  {" "}
                  <h6 className=" text-body-tertiary me-2 mb-0">
                    {"Massima " + (e.main.temp_max - 273.15).toFixed(1) + "C°"}
                  </h6>
                  <h6 className=" text-body-tertiary mx-2 mb-0">
                    {"Minima " + (e.main.temp_min - 273.15).toFixed(1) + "C°"}
                  </h6>
                </div>
              </Col>
              <Col id="1" className="my-3 ">
                <div className="text-center">
                  <h6 className=" text-body-tertiary me-2 mb-0">
                    {"Umidità: " + (e.main.humidity - 273.15).toFixed(1) + "%"}
                  </h6>
                  <h6 className=" text-body-tertiary mx-2 mb-0">{"Velocità Venti: " + e.wind.speed + " nodi"}</h6>
                  <h6 className=" text-body-tertiary mx-2 mb-0">{"Visibilità: " + e.visibility}</h6>
                </div>
              </Col>
            </Row>
          );
        })}
      </Container>
    );
  }
};

export default Prossimamente;
