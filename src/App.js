import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Committee from "./components/comittee/comittee";
import Events from "./components/Events/events";
import Gallery from "./components/Gallery/gallery";
import Register from "./components/Register/register";
import GrnbaBadminton from "./components/Gallery/grnbabadminton";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/executive-committee" element={<Committee />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/grnbabadminton" element={<GrnbaBadminton />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
