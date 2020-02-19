import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/Index";
import { BrowserRouter as Router } from "react-router-dom";

export const Context = React.createContext();

const Index = () => (
  <Router>
    <App />
  </Router>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);
