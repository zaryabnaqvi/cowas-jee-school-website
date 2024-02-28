import React from 'react'
import '../Styles/Info.css'
import "../Styles/Achievement.css"
import AchievementCard from '../Components/AchievementCard'
export default function Achievement() {
    return (
        <>


            <div className="info-section" id="services">
                <div className="info-title-content">
                    <h3 className="info-title">
                        <span>Achievements</span>
                    </h3>
                    <p className="info-description">
                        Stay connected and informed with our school notifications! Get timely updates on events, announcements, and achievements within our vibrant school community. Never miss a beat in our journey of learning, growth, and success together!
                    </p>
                </div>

                <div className='container'>
                    <h1 className='heading-acc'>Achievements of 2024</h1>
                    <div className='item-container'>
                        <div className='item-acc my-2'>
                                <AchievementCard/>
                        </div>
                        <div className='item-acc my-2'>
                                <AchievementCard/>
                        </div>
                        <div className='item-acc my-2'>
                                <AchievementCard/>
                        </div>
                        <div className='item-acc my-2'>
                                <AchievementCard/>
                        </div>
                       
                       
                      
                      
                    </div>
                </div>
                <div className='container'>
                    <h1 className='heading-acc'>Achievements of 2023</h1>
                    <div className='item-container'>
                    <div className='item-acc my-2'>
                                <AchievementCard/>
                        </div>
                        <div className='item-acc my-2'>
                                <AchievementCard/>
                        </div>
                        <div className='item-acc my-2'>
                                <AchievementCard/>
                        </div>
                        <div className='item-acc my-2'>
                                <AchievementCard/>
                        </div>
                    </div>
                </div>


                <div className='container'>

                    <h1 className='heading-acc'>Achievements of 2022</h1>
                    <div className='item-container'>
                    <div className='item-acc my-2'>
                                <AchievementCard/>
                        </div>
                        <div className='item-acc my-2'>
                                <AchievementCard/>
                        </div>
                        <div className='item-acc my-2'>
                                <AchievementCard/>
                        </div>
                        <div className='item-acc my-2'>
                                <AchievementCard/>
                        </div>
                    </div>
                </div>
                
             

            </div>

        </>
    )
}
