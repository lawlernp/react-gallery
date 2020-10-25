import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList'

class App extends Component {

  state = {
    imagesArray : [],
    }
  


  componentDidMount = () => {
    // console.log('app.js mounted');
    this.getImages();
  }
  
    getImages = () => {
    axios.get('/gallery').then((response) => {
        this.setState({
          imagesArray: response.data,
        })
        // console.log(response.data);
      }).catch((error)=> {
        console.log(error);
        alert('Oops. Try again later.')
    });
  }

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Gallery</h1>
        </header>
        <br/>
        <GalleryList galleryArray={this.state.imagesArray} getImages={this.getImages}/>
      </div>
    );
  }
}

export default App;
