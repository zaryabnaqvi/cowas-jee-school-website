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
import About from "./Pages/About";
import Events from "./Pages/Events";
import FacultyList from "./Pages/Faculty";
import NonFaculty from "./Pages/NonFaculty";

function App() {
  return (
    <div className="App">
      <Router >
      
        <Routes  >
        <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/gallery" element={<ResponsiveImageGallery />} />
          <Route path="/notifications" element={<Accouncements/>} />
          <Route path="/achievement" element={<Achievement/>} />
          <Route path="/Events" element={<Events/>} />
          {/* <Route path="/" element={<Inaugration/>} /> */}


          <Route path="/about" element={<About/>} />
          <Route path="/faculty/Teaching" element={<FacultyList/>} />
          <Route path="/faculty/NonTeaching" element={<NonFaculty/>} />



          {/* <Route path="/legal" element={<Legal />} /> */}
{/*           
          <Route path="/appointment" element={<Appointment />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        
      </Router>
    </div>
  );
}

export default App;
