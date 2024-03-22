import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import { useState } from "react";
import InputField from "./components/InputField";
import Body from "./components/Body";
import Prossimamente from "./components/Prossimamente";

// import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import NavBar from "./components/NavBar";
// import Footer from "./components/Footer";

function App() {
  const [città, setCittà] = useState(null);
  const [cittacercata, setCittaCercata] = useState(null);

  return (
    <BrowserRouter>
      <div>
        <NavBar />
      </div>
      <div>
        <InputField città={città} setCittà={setCittà} setCittaCercata={setCittaCercata} cittacercata={cittacercata} />
      </div>

      <Routes>
        <Route path="/Oggi" element={<Body città={città} />} />

        <Route path="/prossimamente" element={<Prossimamente città={città} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
