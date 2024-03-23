import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

const InputField = ({ setOggi, setPrevisioni }) => {
  const apiId = "&appid=b582869caedcd3e856eded1b00ec4743";
  let cittaCercata = "";
  const setCitCer = (e) => {
    cittaCercata = e;
  };

  const urlArray = [
    "https://api.openweathermap.org/data/2.5/weather?q=",
    "https://api.openweathermap.org/data/2.5/forecast?q=",
  ];

  const cittàFetch = () => {
    urlArray.forEach((url, i) => {
      fetch(url + cittaCercata + apiId)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Errore nello svolgimento della fetch");
          }
        })
        .then((data) => {
          if (i === 0) {
            setOggi(data);
          } else {
            setPrevisioni(data);
          }
        })
        .catch((error) => {
          console.log("Errore", error);
        });
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
              return setCitCer(e.target.value);
            }}
          />
        </Form.Group>
        <Button className="mx-3 bg-info border-white" onClick={() => cittàFetch()}>
          Cerca
        </Button>
      </Form>
    </div>
  );
};

export default InputField;
