import React from "react";
import "./HomePage.scss";
import _video from "../../assets/hero.webm";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <video muted loop autoPlay preload="none">
        <source src={_video} type="video/webm" />
      </video>
    </div>
  );
};

export default HomePage;
