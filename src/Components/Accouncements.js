import React, { useState, useEffect } from 'react';
import '../Styles/Info.css';
import "../Styles/acc.css";

export default function Accouncements() {
    const [notifications, setNotifications] = useState([]);
    const [typess, setTypes] = useState([]);

    useEffect(() => {
        // Fetch data from the API endpoint
        fetch('http://127.0.0.1:8080/notifications')
            .then(response => response.json())
            .then(data => {
                setNotifications(data)
                const uniqueYears = [...new Set(data.map(achievement => achievement.type))];
                setTypes(uniqueYears);
            }
            )
            .catch(error => console.error('Error fetching notifications:', error));
    }, []);

    return (
        <>
            <div className='section-container'>

                <div className="info-section" id="">

                    <div className="info-title-content pt-5">
                        <h3 className="info-title pt-5">
                            <span className='mt-5'>Notifications</span>
                        </h3>
                        <p className="info-description">
                            Stay connected and informed with our school notifications! Get timely updates on events, announcements, and achievements within our vibrant school community. Never miss a beat in our journey of learning, growth, and success together!
                        </p>
                    </div>
                    <div className='container'>
                    <h1 className='heading-acc'>Latest Accouncements</h1>
                    <div className='item-container'>
                        {notifications.map((notification,idx)=>{
                            if(idx<5){
                                return(
                                    <a style={{textDecoration:"none"}} href={notification.uploadedDocument}  download >
                                    <div className='item-acc item-acc pt-1 my-0'>
                            <div className='item-button'>
                                {">"}
                            </div>
                            <div className='item-text'>
                                <span className='item-heading'>{notification.title}</span>
                                <span className='item-date'>{notification.issueDate.day}-{notification.issueDate.month}-{notification.issueDate.year}</span>
                            </div>
                        </div>
                        </a>
                                )
                            }
                        })}
                      
                        
                     
                    </div>
                </div>

                    {typess.map((type, index) => {
                        return (
                            <>
                                <div className='container'>

                                    <h1 className='heading-acc'>{type}</h1>
                                    <div className='item-container'>
                                    {notifications.map((notification, idx) => {
                                        if(notification.type==type){
                                       return( 
                                        <a style={{textDecoration:"none"}} href={notification.uploadedDocument}  download >
                                        <div className='item-acc item-acc pt-1 my-0'>
                                        <div className='item-button'>
                                            {">"}
                                        </div>
                                        <div className='item-text'>
                                            <span className='item-heading'>{notification.title}</span>
                                            <span className='item-date'>{notification.issueDate.day}-{notification.issueDate.month}-{notification.issueDate.year}</span>
                                        </div>
                                    </div>
                                    </a>


                                        )
                                        }
                                    })}
                                    </div>


                                </div>
                            </>
                        )
                    })}
                   
                </div>
            </div>
        </>
    );
}
