import React from "react";

import "./Footer.css";

const Footer = props => (
  <footer className="pagebottom">
    <div className="bottom-center">
      <a href="https://github.com/Ponker25">
        <div className="bottom-name">William Swensen</div>
      </a>
      <div className="bottom-nav">
        <a href="https://github.com/Ponker25">
          <i id="social-git" className="fab fa-github-square fa-3x social" />
        </a>
        <a href="https://www.linkedin.com/in/william-swensen/">
          <i id="social-linked" className="fab fa-linkedin fa-3x social" />
        </a>
        <a href="mailto:williamswensen86@gmail.com">
          <i id="social-email" className="fa fa-envelope-square fa-3x social" />
        </a>
      </div>
    </div>
  </footer>
);
export default Footer;