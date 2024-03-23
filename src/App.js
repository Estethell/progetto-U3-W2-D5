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
