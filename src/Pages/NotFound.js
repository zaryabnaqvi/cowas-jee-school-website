import React from "react";
import { useLocation } from "react-router-dom";

function NotFound() {
  const deployedURL = window.location.href;
  const location = useLocation();

  return (
    <div style={{display:'flex',minHeight:"100vh",justifyContent:"center",alignItems:"center"}}>
      <div style={{fontSize:"6rem",textAlign:"center"}}>Comming Soon</div>
     
    </div>
  );
}

export default NotFound;
