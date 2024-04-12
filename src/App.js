import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Experience from "./components/Experience/Experience";
import Academics from "./components/Academics/Academics";
import Contact from "./components/Contact/Contact";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Experience />
      <Academics />
      <Contact />
    </>
  );
};

export default App;
