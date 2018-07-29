import React, { Component } from 'react';
import logo from './logo.svg';

// import components
import Wrapper from "./components/Wrapper";
import StickyHeader from "./components/StickyHeader";
import Title from "./components/Title";
import SaladPic from "./components/SaladPic";

// import data
import salads from "./salads.json";

// import Fisher-Yates shuffle
import shuffle from "./components/Algorithms/shuffle.js";

// main styles
import './App.css';

class App extends Component {
  staticSalads = salads.map(function (salad) {
    salad.clicked = false;
    return salad;
  });

  state = {
    staticSalads: this.staticSalads,
    shufflingSalads: shuffle(this.staticSalads.slice()),
    currentScore: 0,
    topScore: 0,
    message: "Click an image to begin!"
  }

  pickSalad = (event) => {
    var id = event.target.getAttribute("data-id");
    if (this.state.staticSalads[id].clicked) {
      this.startOver();
    } else {
      this.staticSalads[id].clicked = true;
      this.setState({ 
        staticSalads: this.staticSalads,
        shufflingSalads: shuffle(this.staticSalads.slice()),
        currentScore: this.state.currentScore + 1,
        topScore: Math.max(this.state.topScore, this.state.currentScore + 1),
        message: "CORRECT!"
      });
    }
  }

  startOver = () => {
    console.log("You lose.")
    const resetSalads = this.staticSalads.map(function (salad) {
      salad.clicked = false;
      return salad;
    });
    this.setState({ 
      staticSalads: resetSalads,
      shufflingSalads: shuffle(this.staticSalads.slice()),
      currentScore: 0,
      message: "INCORRECT! Try again?"
    });
  }


  render() {
    return (
      <Wrapper>
        <StickyHeader
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
          message={this.state.message}
        />
        <div className="App">
          <Title />
          <p className="App-intro">
            Click a different image each time! Can you remember them all?
          </p>
        </div>
        <div className="game-wrapper" id="game-wrapper">
          {this.state.shufflingSalads.map(salad => (
            <SaladPic
              id={salad.id}
              name={salad.name}
              image={salad.image}
              onClick={this.pickSalad}
            />
          ))}
        </div>
      </Wrapper>
    );
  }
}

export default App;
