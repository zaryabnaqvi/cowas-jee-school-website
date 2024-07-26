import React, { useState, useEffect } from 'react';
import AchievementCard from '../Components/AchievementCard';
import '../Styles/Info.css';
import '../Styles/Achievement.css';
import '../Styles/SchoolHistory.css'
import Info from '../Components/Info';
import moduleName from '../Assets/pixelcut-export.png'
import SchoolHistory from '../Components/SchoolHistory';
import Teachers from '../Components/Teachers';
import Executive from '../Components/ExecutiveBodys';
import WebManagement from '../Components/WebManagment';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

export default function About() {

    useEffect(()=>{window.scrollTo(0,0)},[])
   
  

    return (
        
        <div className="" id="services">

            <Navbar/>

<section className='l-section wpb_row height_medium full_height valign_center container-fluid'>
                <div className="l-section-img16" data-img-width="1920" data-img-height="1080" ></div>
                <div className="l-section-overlay" ></div>
            <div className="info-title-content pt-5 text-center">
                <h3 className="info-title pt-5">
                    <span>About Us</span>
                </h3>

                <div className='container mt-5'>
                    <div className='row'>

                        <div className='col-md-6'>
                            <div style={{ flexDirection: "column" }} className='d-flex justify-content-center align-items-center'>
                                <img className='img-fluid' style={{ filter: "drop-shadow(0 0 0.5rem black)" }} src={moduleName} />
                                <span style={{ opacity: "0.5" ,margin:"0.3rem",fontFamily:"Rubik" }}>Offical logo of The cowas jee school</span>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='about-div text-start'>
                                <h3 style={{fontFamily:"'Rubik', sans-serif",fontWeight:"bold"}}>
                                    MISSION STATEMENT
                                </h3>
                                <p style={{fontFamily:"'Rubik', sans-serif",fontWeight:"bold",letterSpacing: ".8px"}}>
                                    The Cowasjee School approach to education is holistic. We are committed to provide such education which caters the intellectual, social, moral, physical and emotional needs of the child.

                                </p>
                                <p style={{fontFamily:"'Rubik', sans-serif",letterSpacing: ".8px",opacity:0.8}}>
                                    The Staff and the Management Committee of The Cowasjee School are committed to create and maintain an orderly, trustworthy and caring environment. All aspects of the school’s organization, curricular and co-curricular activities are child-centered, aiming to produce young people who can show an ability to think critically, be a problem solver, become lifelong learners, have a sense of understanding and compassion for others and have the courage to act on their plans. Our curriculum optimizes potential and builds personal responsibility. We are dedicated to the individual development of attitudes, skills knowledge and responsibility essential to successful achievement in school and society.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            </section>

<SchoolHistory></SchoolHistory>
<Executive/>
<Teachers />
<WebManagement/>

            <Footer/>
        </div>
    );
}
