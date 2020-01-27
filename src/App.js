import React from 'react';

import "./styles/fonts.css";
import "./styles/styles.css";

import Header from "../src/components/Header";
import About from "../src/components/About";
import Top from "../src/components/Top";
import Skills from "../src/components/Skills";
import Projects from "../src/components/Projects";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";

function App() {
  return (
    <div>
        <Header />

      <div className="App">
        <Top />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>

  );
}

export default App;
