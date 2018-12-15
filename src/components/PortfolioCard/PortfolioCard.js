import React from "react";
import "./PortfolioCard.css";

const PortfolioCard = props => (
  
  <div className="card">
    <div className="img-container" id={props.id}
      value={props.id}
      onClick={props.github}
      >
      <img class="card-img-top" alt={props.name} src={window.location + `images/${props.image}`} />
      
    </div>
  
  </div>
);

export default PortfolioCard;