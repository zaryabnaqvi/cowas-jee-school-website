import React, { useEffect, useState } from 'react';
import "../Styles/Gallery.css";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Navbar from './Navbar';
import Footer from './Footer';
// import "../Styles/Info.css"

const ResponsiveImageGallery = () => {
    const [modalContent, setModalContent] = useState(null);
    const [achievements, setAchievements] = useState([]);

    const [showModal, setShowModal] = useState(false);
  
    const handleImageClick = (src) => {
      setModalContent(<img src={src} className="modal-img" />);
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


    useEffect(() => {
      fetchAchievements();
  }, []);

  const fetchAchievements = async () => {
      try {
          const response = await fetch('https://nedmob1.neduet.edu.pk:8080/achievement');
          if (!response.ok) {
              throw new Error('Failed to fetch data');
          }
          const data = await response.json();
          setAchievements(data);
          
        
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  };
   

  useEffect(()=>{
   
      
  })


  const [events, setevents] = useState([]);
  const [years, setYears] = useState([]);

  useEffect(() => {
      fetchevents();
  }, []);

  const fetchevents = async () => {
      try {
          const response = await fetch('https://nedmob1.neduet.edu.pk:8080/event');
          if (!response.ok) {
              throw new Error('Failed to fetch data');
          }
          const data = await response.json();
          setevents(data);
        
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  };

  return (
<>
 <Navbar/>
    <div className="info-section ">

     
      <div className="info-title-content pt-5">
        <h3 className="info-title pt-5">
          <span>Gallery</span>
        </h3>
        <p className="info-description">
        Stay connected and informed with our school notifications! Get timely updates on events, announcements, and achievements within our vibrant school community. Never miss a beat in our journey of learning, growth, and success together!
        </p>
      </div>
     <hr/>
      <div id="gallery" className="container-fluid px-3">

        {achievements.map((achievement,index)=>{

return(<img src={achievement.imageUrl} className="img-responsive" onClick={() => handleImageClick(achievement.imageUrl)} />)

        })}
         {events.map((event,index)=>{

return(<img src={event.imageUrl} className="img-responsive" onClick={() => handleImageClick(event.imageUrl)} />)

        })}

{achievements.map((achievement,index)=>{

return(<img src={achievement.imageUrl} className="img-responsive" onClick={() => handleImageClick(achievement.imageUrl)} />)

        })}



        {/* <img src="https://source.unsplash.com/1024x768" className="img-responsive" onClick={() => handleImageClick("https://source.unsplash.com/1024x768")} />
        <img src="https://source.unsplash.com/1366x768" className="img-responsive" onClick={() => handleImageClick("https://source.unsplash.com/1366x768")} />
        <video className="vid" controls onClick={() => handleVideoClick("http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4")}>
          <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
        </video>
        <img src="https://source.unsplash.com/1920x1080" className="img-responsive" onClick={() => handleImageClick("https://source.unsplash.com/1920x1080")} />
        <img src="https://source.unsplash.com/640x360" className="img-responsive" onClick={() => handleImageClick("https://source.unsplash.com/640x360")} />
        <img src="https://source.unsplash.com/320x640" className="img-responsive" onClick={() => handleImageClick("https://source.unsplash.com/320x640")} />
        <img src="https://source.unsplash.com/1600x1600" className="card img-responsive" onClick={() => handleImageClick("https://source.unsplash.com/1200x1600")} />
        <img src="https://source.unsplash.com/800x600" className="img-responsive" onClick={() => handleImageClick("https://source.unsplash.com/800x600")} />
        <img src="https://source.unsplash.com/600x800" className="img-responsive" onClick={() => handleImageClick("https://source.unsplash.com/600x800")} />
        <img src="https://source.unsplash.com/400x600" className="img-responsive" onClick={() => handleImageClick("https://source.unsplash.com/400x600")} />
        <img src="https://source.unsplash.com/400x600" className="img-responsive" onClick={() => handleImageClick("https://source.unsplash.com/400x600")} />
        <img src="https://source.unsplash.com/400x600" className="img-responsive" onClick={() => handleImageClick("https://source.unsplash.com/400x600")} />
        <img src="https://source.unsplash.com/400x600" className="img-responsive" onClick={() => handleImageClick("https://source.unsplash.com/400x600")} />
        <img src="https://source.unsplash.com/400x600" className="img-responsive" onClick={() => handleImageClick("https://source.unsplash.com/400x600")} />
        <img src="https://source.unsplash.com/400x600" className="img-responsive" onClick={() => handleImageClick("https://source.unsplash.com/400x600")} />
        <img src="https://source.unsplash.com/600x400" className="img-responsive" onClick={() => handleImageClick("https://source.unsplash.com/600x400")} />
        <img src="https://source.unsplash.com/900x900" className="img-responsive" onClick={() => handleImageClick("https://source.unsplash.com/1100x1600")} />
        <img src="https://source.unsplash.com/1100x1100" className="img-responsive" onClick={() => handleImageClick("https://source.unsplash.com/1600x1100")} />
        <img src="https://source.unsplash.com/992x768" className="img-responsive" onClick={() => handleImageClick("https://source.unsplash.com/992x768")} />
        <img src="https://source.unsplash.com/768x992" className="img-responsive" onClick={() => handleImageClick("https://source.unsplash.com/768x992")} />
        <img src="https://source.unsplash.com/768x992" className="img-responsive" onClick={() => handleImageClick("https://source.unsplash.com/768x992")} />
        <img src="https://source.unsplash.com/768x992" className="img-responsive" onClick={() => handleImageClick("https://source.unsplash.com/768x992")} />
        <img src="https://source.unsplash.com/768x992" className="img-responsive" onClick={() => handleImageClick("https://source.unsplash.com/768x992")} />
        <img src="https://source.unsplash.com/768x992" className="img-responsive" onClick={() => handleImageClick("https://source.unsplash.com/768x992")} />
        <img src="https://source.unsplash.com/768x992" className="img-responsive" onClick={() => handleImageClick("https://source.unsplash.com/768x992")} />
        <img src="https://source.unsplash.com/768x992" className="img-responsive" onClick={() => handleImageClick("https://source.unsplash.com/768x992")} /> */}

      </div>

      { (
              
      <Modal show={showModal} style={{margin:0,padding:0}} onHide={toggleModal}>
      {/* <Modal.Header closeButton>
        <Modal.Title>Modal</Modal.Title>
      </Modal.Header> */}
      <Modal.Body style={{margin:0,padding:0}} > 
<button  onClick={toggleModal} class="button">
  <span class="X"></span>
  <span class="Y"></span>
  <div class="close">Close</div>
</button>
{modalContent}</Modal.Body>
      {/* <Modal.Footer>
        <Button variant="secondary" onClick={toggleModal}>
          Close
        </Button>
      </Modal.Footer> */}
    </Modal>

        
      )}
      
    </div>
<Footer/>
</>
  );
};

export default ResponsiveImageGallery;
