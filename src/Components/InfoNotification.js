import React ,{useState,useEffect} from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse, faTruckMedical, faTooth } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";
import Notification from "./Notification";

function InfoNotification() {
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
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title mt-5">
          <span>Notifications</span>
        </h3>
        <p className="info-description">
        Stay connected and informed with our school notifications! Get timely updates on events, announcements, and achievements within our vibrant school community. Never miss a beat in our journey of learning, growth, and success together!
        </p>
      </div>

      <div className="info-cards-content">
      
{notifications.map((notification,idx)=>{
  if(idx<3)
      return ( <Notification type={notification.type} title={notification.title} description={notification.description} issueDate={notification.issueDate}/>)
})}
       

      </div>
    </div>
  );
}

export default InfoNotification;
