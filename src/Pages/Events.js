import React, { useState, useEffect } from 'react';
import AchievementCard from '../Components/AchievementCard';
import '../Styles/Info.css';
import Modal from 'react-bootstrap/Modal';
import '../Styles/Achievement.css';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

export default function Events() {
    const [modalContent, setModalContent] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleImageClick = (src) => {
        setModalContent(<img src={src} className="modal-img" alt="Achievement" />);
        toggleModal();
    };

    const handleVideoClick = (src) => {
        setModalContent(
            <video className="model-vid" controls>
                <source src={src} type="video/mp4" />
            </video>
        );
        toggleModal();
    };

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const [achievements, setAchievements] = useState([]);
    const [years, setYears] = useState([]);

    useEffect(() => { window.scrollTo(0, 0) }, []);
    useEffect(() => {
        fetchAchievements();
    }, []);

    const fetchAchievements = async () => {
        try {
            const response = await fetch('https://nedmob1.neduet.edu.pk:8080/event');
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
        <>
            <Navbar />
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
                                    <AchievementCard
                                        title={item.title}
                                        description={item.description}
                                        imageUrl={item.imageUrl}
                                        onImageClick={handleImageClick} // Pass handleImageClick as a prop
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                {achievements.length === 0 && <p>No events found</p>}

                {showModal && (
                    <Modal show={showModal} style={{ margin: 0, padding: 0 }} onHide={toggleModal}>
                        <Modal.Body style={{ margin: 0, padding: 0 }} >
                            <button onClick={toggleModal} className="button">
                                <span className="X"></span>
                                <span className="Y"></span>
                                <div className="close">Close</div>
                            </button>
                            {modalContent}
                        </Modal.Body>
                    </Modal>
                )}
            </div>

            <Footer />
        </>
    );
}




// import React, { useState, useEffect } from 'react';
// import AchievementCard from '../Components/AchievementCard';
// import '../Styles/Info.css';
// import '../Styles/Achievement.css';
// import Footer from '../Components/Footer';
// import Navbar from '../Components/Navbar';
// // import { Navbar } from 'react-bootstrap';

// export default function Events() {
//     const [achievements, setAchievements] = useState([]);
//     const [years, setYears] = useState([]);
//     useEffect(()=>{window.scrollTo(0,0)},[])
//     useEffect(() => {
        
//         fetchAchievements();
//     }, []);

//     const fetchAchievements = async () => {
//         try {
//             const response = await fetch('https://nedmob1.neduet.edu.pk:8080/event');
//             if (!response.ok) {
//                 throw new Error('Failed to fetch data');
//             }
//             const data = await response.json();
//             setAchievements(data);
//             const uniqueYears = [...new Set(data.map(achievement => achievement.year))];
//             setYears(uniqueYears);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };

//     return (
//         <>
//         <Navbar />
//         <div className="info-section" id="services">
            
//             <div className="info-title-content pt-5">
//                 <h3 className="info-title pt-5">
//                     <span>Events</span>
//                 </h3>
//                 <p className="info-description">
//                     Stay connected and informed with our school notifications! Get timely updates on events, announcements,
//                     and achievements within our vibrant school community. Never miss a beat in our journey of learning,
//                     growth, and success together!
//                 </p>
//             </div>

//             {years.map(year => (
//                 <div key={year} className="container">
//                     <h1 className="heading-acc">Events of {year}</h1>
//                     <div className="item-container">
//                         {achievements.filter(achievement => achievement.year === year).map((item, idx) => (
//                             <div key={idx} className="item-acc my-2">
//                                 <AchievementCard title={item.title} description={item.description} imageUrl={item.imageUrl} />
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             ))}
//             {achievements.length === 0 && <p>No events found</p>}

            
//         </div>

//         <Footer/>
//         </>
//     );
// }
