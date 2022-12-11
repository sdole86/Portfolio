import React from "react"
import "./styles.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About"
import Home from "./components/Home";
import Technologies from "./components/Technology";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Credentials from "./components/Credentials";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/projects/*" element={<Projects />} />
          <Route exact path="/resume" element={<Resume />} />
          <Route exact path="/credentials" element={<Credentials />} />
          <Route exact path="/technologies" element={<Technologies />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        </div>
      </Router>

    </div>
  );
}

export default App;
