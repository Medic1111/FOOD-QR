import "./App.css";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import QRCode from "./components/QRCode/QRCode";
import Form from "./components/Form/Form";
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
