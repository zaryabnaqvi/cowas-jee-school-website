import React, { useState, useEffect } from 'react';
import AchievementCard from '../Components/AchievementCard';
import '../Styles/Info.css';
import '../Styles/Achievement.css';

export default function Events() {
    const [achievements, setAchievements] = useState([]);
    const [years, setYears] = useState([]);

    useEffect(() => {
        fetchAchievements();
    }, []);

    const fetchAchievements = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8080/event');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setAchievements(data);
            const uniqueYears = [...new Set(data.map(achievement => achievement.year))];
            setYears(uniqueYears);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="info-section" id="services">
            <div className="info-title-content pt-5">
                <h3 className="info-title pt-5">
                    <span>Events</span>
                </h3>
                <p className="info-description">
                    Stay connected and informed with our school notifications! Get timely updates on events, announcements,
                    and achievements within our vibrant school community. Never miss a beat in our journey of learning,
                    growth, and success together!
                </p>
            </div>

            {years.map(year => (
                <div key={year} className="container">
                    <h1 className="heading-acc">Events of {year}</h1>
                    <div className="item-container">
                        {achievements.filter(achievement => achievement.year === year).map((item, idx) => (
                            <div key={idx} className="item-acc my-2">
                                <AchievementCard title={item.title} description={item.description} imageUrl={item.imageUrl} />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            {achievements.length === 0 && <p>No events found</p>}
        </div>
    );
}
