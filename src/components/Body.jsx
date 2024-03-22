import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const Body = ({ città }) => {
  if (città === null) {
    return;
  } else {
    const data = new Date();
    console.log("ciao");
    return (
      <Container>
        <Row className="flex-column">
          <Col>
            <h2 className="data1 text-body-tertiary">{data.toLocaleDateString()}</h2>
          </Col>
          <Col>
            <div className="d-flex">
              <h6 className=" text-body-tertiary">{"Massima " + (città.main.temp_max - 273.15).toFixed(1) + "C°"}</h6>
              <h6 className=" text-body-tertiary">{"Minima " + (città.main.temp_min - 273.15).toFixed(1) + "C°"}</h6>
            </div>
          </Col>
          <Col>
            <h1 className="data2 text-body-tertiary">{(città.main.temp - 273.15).toFixed(1) + "C°"}</h1>
          </Col>
          <Col>
            <h2 className=" text-body-tertiary">ciao</h2>
          </Col>

          <Col></Col>
        </Row>
      </Container>
    );
  }
};

export default Body;
