import React from "react";
import "./PortfolioCard.css";

const PortfolioCard = props => (
  
  <div className="card">
    <div className="img-container" id={props.id}
      value={props.id}
      onClick={props.mascotClick}
      >
      <img alt={props.name} src={props.image} id={props.id}/>
      
    </div>
  
    {/* <span   onClick={() => props.shuffleMascot(props.id)} className="shuffleMascot"></span> */}
  </div>
);

export default PortfolioCard;