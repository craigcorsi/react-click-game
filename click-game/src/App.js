import React, { Component } from 'react';
import logo from './logo.svg';

// import components
import Wrapper from "./components/Wrapper";
import StickyHeader from "./components/StickyHeader";
import Title from "./components/Title";

// main styles
import './App.css';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <StickyHeader />
        <div className="App">
          <Title />
          <p className="App-intro">
            Click a different image each time! Can you remember them all?
          </p>
        </div>
        <div className="game-wrapper" id="game-wrapper">

        </div>
      </Wrapper>
    );
  }
}

export default App;
