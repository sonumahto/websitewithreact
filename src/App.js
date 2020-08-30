import React from "react";
import "../src/assets/icofont/icofont.min.css";
import "./App.css";
import "font-awesome/css/font-awesome.css";

import Hero from "./components/Hero";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Features from "./components/Features";
import Testimonial from "./components/Testimonial";
import { ScrollingProvider } from "react-scroll-section";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <ScrollingProvider>
        <Header />
        <Hero />
        <About />
        <Services />
        <Features />
        <Testimonial />
        <Contact />
        <Footer />
      </ScrollingProvider>
    </div>
  );
}

export default App;
