import React, { Component } from 'react';
import logo from './logo.svg';

// import components
import Wrapper from "./components/Wrapper";
import StickyHeader from "./components/StickyHeader";
import Title from "./components/Title";
import PaintingPic from "./components/PaintingPic";

// import data
import paintings from "./paintings.json";

// import Fisher-Yates shuffle
import shuffle from "./components/Algorithms/shuffle.js";

// main styles
import './App.css';

class App extends Component {
  staticPaintings = paintings.map(function (painting) {
    painting.clicked = false;
    return painting;
  });

  state = {
    staticPaintings: this.staticPaintings,
    shufflingPaintings: shuffle(this.staticPaintings.slice()),
    currentScore: 0,
    topScore: 0,
    message: "Click an image to begin!"
  }

  pickPainting = (event) => {
    var id = event.target.getAttribute("data-id");
    if (this.state.staticPaintings[id].clicked) {
      this.startOver();
    } else {
      this.staticPaintings[id].clicked = true;
      this.setState({ 
        staticPaintings: this.staticPaintings,
        shufflingPaintings: shuffle(this.staticPaintings.slice()),
        currentScore: this.state.currentScore + 1,
        topScore: Math.max(this.state.topScore, this.state.currentScore + 1),
        message: "CORRECT!"
      });
    }
  }

  startOver = () => {
    console.log("You lose.")
    const resetPaintings = this.staticPaintings.map(function (painting) {
      painting.clicked = false;
      return painting;
    });
    this.setState({ 
      staticPaintings: resetPaintings,
      shufflingPaintings: shuffle(this.staticPaintings.slice()),
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
          {this.state.shufflingPaintings.map(painting => (
            <PaintingPic
              id={painting.id}
              name={painting.name}
              image={painting.image}
              onClick={this.pickPainting}
            />
          ))}
        </div>
      </Wrapper>
    );
  }
}

export default App;
