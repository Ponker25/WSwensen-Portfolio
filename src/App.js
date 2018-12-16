import React, { Component } from 'react';
// import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
// import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import PortfolioCard from "./components/PortfolioCard";
import BioPic from "./components/BioPic";

import './App.css';
import itemsOfWork from "./portfolio.json";

class App extends Component {
  state= {
    itemsOfWork: itemsOfWork
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <BioPic /><p>William Swensen</p>
        </header>
        <div className="container">
              <div className="bio">
              <AboutMe />
              </div>
          <div className="row">
            <div className="col s12 center">
              <div>
                {this.state.itemsOfWork.map(itemOfWork => (
                  <PortfolioCard
                    name={itemOfWork.name}
                    image={itemOfWork.image}
                    key={itemOfWork.key}
                    link={itemOfWork.link}
                    github={itemOfWork.github}
                    tech={itemOfWork.tech}
                    description={itemOfWork.description}
                  />
                ))}
              </div>
            </div>{" "}
          </div>
        </div>
        <hr className="bottom-margin" />
        <Footer />
      </div>
    );
  }
}

export default App;
