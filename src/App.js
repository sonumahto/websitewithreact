import React from "react";
import "../src/assets/icofont/icofont.min.css";
import "./App.css";

import Hero from "./components/Hero";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Features from "./components/Features";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Services />
      <Features />
    </div>
  );
}

export default App;
