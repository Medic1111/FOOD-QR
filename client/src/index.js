import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { DisplayProvider } from "./store/display-ctx";
import { MenuCtxProvider } from "./store/menu-ctx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MenuCtxProvider>
    <DisplayProvider>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </DisplayProvider>
  </MenuCtxProvider>
);
