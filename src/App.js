import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    imageItems,
    picturesClicked: [],
    imageId: "",
    totalScore: 0,
    highScore: 0
  };

  shuffleImages = (imageItems) => {
    for (var i = imageItems.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * imageItems.length);
      [imageItems[i], imageItems[j] = imageItems[j], imageItems[i]];
    }
    return imageItems;
  };

  clickedImages = () => {
    var shuffle = this.shuffleImages(imageItems);
    this.setState({imageItems: shuffle});

    
  }
  render() {
    return (
      <div>
      <Scorebox 
      score ={this.state.totalScore}
      highScore={this.state.highScore}
      />

      {this.state.imageItems.map() => (
       <Image
       imgId= {this.id}
       name={this.name}
       activeState={this.clicked}
       />
      )}
      </div>
    )
  }
}

export default App;
