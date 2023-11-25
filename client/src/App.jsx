import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Accede directamente a la imagen en la carpeta public
const imageUrl = "/Sin_dfd.png";

function Home() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>No alcancé a hacer el frontend</h1>
      <img src={imageUrl} alt="Imagen de la página principal" />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
