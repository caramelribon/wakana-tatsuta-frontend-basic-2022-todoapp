import React from "react";
import ReactDOM from "react-dom";
import MainPage from "./components/Pages/MainPage";
import AlertManager from "../../Organisms/AlertManager";
import { AlertHandlerProvider } from "./contexts/alert_handler";
import "./style.css";

ReactDOM.render(
  <AlertHandlerProvider>
    <AlertManager />
    <MainPage />
  </AlertHandlerProvider>,
  document.getElementById("app")
);
