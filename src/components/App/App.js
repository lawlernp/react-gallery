import React, { Component } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList'

class App extends Component {

  state = {
    imagesArray : [],
    }
  


  componentDidMount = () => {
    console.log('app.js mounted');
  }
  
  
  

  
  
  
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
        <GalleryList />
      </div>
    );
  }
}

export default App;
