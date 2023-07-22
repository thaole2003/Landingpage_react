import React from "react";
import Home from "./pages/Home";
import About from "./pages/Template";
import Contact from "./pages/Contact";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
     

      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Home />} />
        <Route path="/template/:all" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
     
          <Footer/>

    </div>
  );
}

export default App;
