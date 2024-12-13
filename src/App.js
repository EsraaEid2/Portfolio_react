import React from "react";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Navbar from './components/Navbar';
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
// import styles from "./styles/App.css";


const App = () =>(  
  <Router>
    <Navbar/>
    <Routes>
      <Route path = "/" element ={<Home/>}/>
      <Route path = "/skills" element ={<Skills/>}/>
      <Route path = "/about" element ={<About/>}/>
      <Route path = "/projects" element ={<Projects/>}/>
      <Route path = "/contact" element ={<Contact/>}/>
    </Routes>
  </Router>
);

export default App;
