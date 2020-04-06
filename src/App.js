import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Scorebox from "./components/Scorebox";
import Image from "./components/Items";
import imageItems from "./images.json";

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
      var j = Math.floor(Math.random() * [i] + 1);
      [imageItems[i], imageItems[j]] = [imageItems[j], imageItems[i]];
    }
    return imageItems;
  };

  clickedImages = (picture) => {
    var shuffle = this.shuffleImages(imageItems);
    this.setState({imageItems: shuffle});
  

  if (this.state.picturesClicked.includes(picture)){
    this.setState({
      picturesClicked: [],
      totalScore: 0
    })}
    else {
      this.setState({
        picturesClicked: this.state.picturesClicked.push[picture],
        totalScore: this.state.totalScore++
      });
    }
  if (this.state.score > this.state.highScore) {
    this.setState({highScore: this.state.score})
  }
  };
  render() {
    return (
      <div>
      <Scorebox 
      score ={this.state.totalScore}
      highScore={this.state.highScore}
      />

      {this.state.imageItems.map(pictures => (
       <Image
       imgId= {pictures.imageId}
       name={pictures.name}
       image={pictures.imageLink}
       activeState={this.clickedImages}
       
       />
      ))}
      </div>
    )
  }
}

export default App;
