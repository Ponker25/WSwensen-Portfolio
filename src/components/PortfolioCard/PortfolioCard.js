import React from "react";
import "./PortfolioCard.css";

const PortfolioCard = props => (
  
  <div className="flip-card">
    <div className="flip-card-inner" alt={props.name}>
      <div className="flip-card-front" id={props.id}> 
        <img className="card-image" alt={props.name} src={window.location + `images/${props.image}`} />  
        </div> 
          <div className="flip-card-back"id={props.id} alt={props.name} value={props.id}>
        <h5> 
          {props.name}
        </h5>
        <p>
          Tech: {props.tech}
        </p>
          <p>
            <a id="flip-card-links" href={props.github}>Github Repository</a>
          </p>
          <p>
          <a id="flip-card-links" href={props.link}>Link to Project</a>
          </p>
      </div>
    </div>
  </div>
);



export default PortfolioCard;

