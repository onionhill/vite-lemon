import React from "react";
import "./styles/About.css"
import image1 from "./assets/Mario-1.jpg";
import image2 from "./assets/Mario-2.jpg"

function About() {
  return (
    <div className="about-page">
      <div className="about-text-container">
        <h1 className="about-h1">Little Lemon</h1>
        <h3 className="about-h3">Chicago</h3>
        <span>
        Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.
<br/><br/><br/>
  To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.
      </span>
      </div>
      <div className="about-image-container">
        <img className="about-image image1" src={image1} alt="mario cooking food" />
        <img className="about-image image2" src={image2} alt="mario cooking food" />
      </div>
    </div>
  );
}

export default About;
