import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Legal from "./Pages/Legal";
import NotFound from "./Pages/NotFound";
import Appointment from "./Pages/Appointment";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ResponsiveImageGallery from "./Components/Gallery";
import Accouncements from "./Components/Accouncements";
import Achievement from "./Pages/Achievement";

function App() {
  return (
    <div className="App">
      <Router >
      <Navbar />
        <Routes  >
          
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<ResponsiveImageGallery />} />
          <Route path="/accouncements" element={<Accouncements/>} />
          <Route path="/achievement" element={<Achievement/>} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
