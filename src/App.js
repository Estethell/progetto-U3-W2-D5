import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import { useState } from "react";
import InputField from "./components/InputField";
import Body from "./components/Body";
import Prossimamente from "./components/Prossimamente";
import { useLocation } from "react-router-dom";

// import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import NavBar from "./components/NavBar";
// import Footer from "./components/Footer";

function App() {
  const [oggi, setOggi] = useState(null);
  const [previsioni, setPrevisioni] = useState(null);

  // const location = useLocation();

  // const cittàFetch = (ricerca) => {
  //   debugger;
  //   if (cittacercata.length < 3) {
  //     return;
  //   }
  //   let api = "";
  //   if (ricerca === "/Oggi") {
  //     api =
  //       "https://api.openweathermap.org/data/2.5/weather?q=" + cittacercata + "&appid=b582869caedcd3e856eded1b00ec4743";
  //   } else if (ricerca === "/prossimamente") {
  //     api =
  //       "https://api.openweathermap.org/data/2.5/forecast?q=" +
  //       cittacercata +
  //       "&appid=b582869caedcd3e856eded1b00ec4743";
  //   }
  //   fetch(api)
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       } else {
  //         throw new Error("Errore nello svolgimento della fetch");
  //       }
  //     })
  //     .then((data) => {
  //       setCittà(data);
  //       console.log(città);
  //     })
  //     .catch((error) => {
  //       console.log("Errore", error);
  //     });
  // };

  return (
    <BrowserRouter>
      <div>
        <NavBar />
      </div>
      <div>
        <InputField setOggi={setOggi} setPrevisioni={setPrevisioni} />
      </div>

      <Routes>
        <Route path="/Oggi" element={<Body città={oggi} />} />

        <Route path="/prossimamente" element={<Prossimamente città={previsioni} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
