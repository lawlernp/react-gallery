import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import GalleryList from '../GalleryList/GalleryList'

class App extends Component {

  state = {
    imagesArray : [],
    }
  


  componentDidMount = () => {
    console.log('app.js mounted');
    this.getImages();
  }
  
  
  
  getImages = () => {
    axios({
      method: 'GET',
      url: '/gallery',
      }).then((response) => {
        this.setState({
          imagesArray: response.data,
        })
        console.log(response.data);
      }).catch((error)=> {
        console.log(error);
    });
  }

  
  
  
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
        <GalleryList imagesArray = {this.imagesArray}/>
        <img src="images/goat_small.jpg"/>
      </div>
    );
  }
}

export default App;
