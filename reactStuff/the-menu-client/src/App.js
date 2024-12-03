import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Allroutes from "./router/Pages";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Allroutes />
    </BrowserRouter>
  );
};

export default App;
