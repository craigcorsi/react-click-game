import React, { Component } from 'react';
import logo from './logo.svg';

// import components
import Wrapper from "./components/Wrapper";
import StickyHeader from "./components/StickyHeader";
import Title from "./components/Title";
import SaladPic from "./components/SaladPic";

// import data
import salads from "./salads.json";

// main styles
import './App.css';

class App extends Component {
  salads = salads.map(function(salad){
    salad.clicked = false;
    return salad;
  });

  state = {
    salads: salads
  }

  pickSalad = (event) => {
    return event;
  }


  render() {
    console.log(salads);
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
          {this.state.salads.map(salad => (
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
