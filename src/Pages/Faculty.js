import React, { useState, useEffect } from 'react';
import AchievementCard from '../Components/AchievementCard';
import '../Styles/Info.css';
import '../Styles/Achievement.css';
import '../Styles/SchoolHistory.css'
import Info from '../Components/Info';
import moduleName from '../Assets/logo-green-removebg-preview.png'
import SchoolHistory from '../Components/SchoolHistory';
import Teachers from '../Components/Teachers';
import Executive from '../Components/ExecutiveBodys';
import WebManagement from '../Components/WebManagment';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import FacultyList from '../Components/FacultyList';

export default function Faculty() {

    useEffect(() => { window.scrollTo(0, 0) }, [])



    return (

        <div >

            <Navbar />

            <section style={{ minheight: "100vh!important" }} className=' wpb_row  full_height valign_center container-fluid'>


                <div className="info-title-content pt-5  text-center">


                    <h3 className="info-title pt-5">
                        <span>Teaching Faculty</span>
                    </h3>

                    <FacultyList />

                </div>


            </section>



            <Footer />
        </div>
    );
}
