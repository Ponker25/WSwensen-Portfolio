import React from "react";
import "./PortfolioCard.css";

const PortfolioCard = props => (
  
  <div className="flip-card">
    <div className="flip-card-inner" alt={props.name}>
      <div className="flip-card-front" id={props.id}> 
        <img className="card-image" alt={props.name} src={window.location + `images/${props.image}`} />  
        </div> 
          <div className="flip-card-back"id={props.id}
          alt={props.name}
          value={props.id}
          onClick={props.github} href={props.link}
          >
        <h5> 
          {props.name}
        </h5>
        <p>
          Tech: {props.tech}
        </p>
        <li>
          <a href={props.github}>Github Repository</a>
        </li>
        <li>
        <a href={props.link}>Link to Project</a>
        </li>
      </div>
    </div>
  </div>
);



export default PortfolioCard;

