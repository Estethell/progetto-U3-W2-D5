import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const InputField = ({ città, setCittà }) => {
  let cittaCercata = "";
  const location = useLocation();
  console.log(location);
  const cittàFetch = (e) => {
    if (e.length < 3) {
      return;
    }
    let api = "";
    if (location.pathname === "/Oggi") {
      api = "https://api.openweathermap.org/data/2.5/weather?q=" + e + "&appid=b582869caedcd3e856eded1b00ec4743";
    } else if (location.pathname === "/prossimamente") {
      api = "https://api.openweathermap.org/data/2.5/forecast?q=" + e + "&appid=b582869caedcd3e856eded1b00ec4743";
    }
    fetch(api)
      .then((response) => {
        debugger;
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nello svolgimento della fetch");
        }
      })
      .then((data) => {
        setCittà(data);
        console.log(città);
      })
      .catch((error) => {
        console.log("Errore", error);
      });
  };
  return (
    <div>
      <Form className="formInput my-4 border-2 d-flex">
        <Form.Group>
          <Form.Control
            type="search"
            placeholder="Cerca una città"
            onChange={(e) => {
              console.log(e);
              return (cittaCercata = e.target.value);
            }}
          />
        </Form.Group>
        <Button className="mx-3" onClick={(e) => cittàFetch(cittaCercata)}>
          Cerca
        </Button>
      </Form>
    </div>
  );
};

export default InputField;
