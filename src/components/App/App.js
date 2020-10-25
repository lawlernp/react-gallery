import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
// importing GalleryList to use in render
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
      //HTTP GET request using axios
    axios.get('/gallery').then((response) => {
      //saving response (our array of image location and decription data objects) to state
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
        {/* rendering GalleryList and passing galleryArray and getImages as props  */}
        <GalleryList galleryArray={this.state.imagesArray} getImages={this.getImages}/>
      </div>
    );
  }
}

export default App;
