import { Container, Row, Col } from "react-bootstrap";

const Prossimamente = ({ città }) => {
  if (città === null || città.list === undefined) {
    return (
      <Container className="d-flex justify-content-center text-body-tertiary">
        <h1>Inserisci un nome di città valido</h1>
      </Container>
    );
  } else {
    const giorno = new Date();
    const immagine = (e) => {
      return "https://openweathermap.org/img/wn/" + e + "@2x.png";
    };
    const newDate = (i) => {
      giorno.setDate(giorno.getDate() + i);
      return giorno.toDateString();
    };
    return (
      <Container>
        {città.list.map((e, i) => {
          return (
            <Row key={e.weather.id} className="border-top border-tertiary ">
              <Col id="1" className="my-3">
                <div>{newDate(i)}</div>
              </Col>

              <Col id="2" className="my-3">
                <div>
                  <img src={immagine(e.weather[0].icon)} alt="tempo" style={{ width: "70px" }} />
                </div>
              </Col>

              <Col id="3" className="my-3">
                <div>
                  {" "}
                  <h6 className=" text-body-tertiary me-2 mb-0">
                    {"Massima " + (e.main.temp_max - 273.15).toFixed(1) + "C°"}
                  </h6>
                  <h6 className=" text-body-tertiary mx-2 mb-0">
                    {"Minima " + (e.main.temp_min - 273.15).toFixed(1) + "C°"}
                  </h6>
                </div>
              </Col>

              <Col id="4" className="my-3">
                <div></div>
              </Col>
            </Row>
          );
        })}
      </Container>
    );
  }
};

export default Prossimamente;
