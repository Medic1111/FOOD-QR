import "./App.css";
import React from "react";
import Specific from "./pages/Specific";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants/:id" element={<Specific />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
