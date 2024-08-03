import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Info from "../Components/Info";
import About from "../Components/About";
import BookAppointment from "../Components/BookAppointment";
import Reviews from "../Components/Reviews";
import Teachers from "../Components/Teachers";
import Footer from "../Components/Footer";
import InfoNotification from '../Components/InfoNotification'

function Home() {

  useEffect(()=>{window.scrollTo(0,0)},[])
  return (
    <div className="home-section">
      <Navbar />
      <Hero />
      {/* <Info />
       */}
       <InfoNotification/>
      <About />
      <BookAppointment />
      <Reviews />
     
      <Footer/>
      
    </div>
  );
}

export default Home;
