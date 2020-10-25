import React, { Component } from 'react';
import axios from 'axios';
import GalleryItem from '../GalleryItem/GalleryItem'


class GalleryList extends Component {
  
  
  state = {
    GalleryItems : [],
    }


  componentDidMount = () => {
    console.log('GalleryList.js mounted');
    this.loadItems()
    this.getImages();
  }

  getImages = () => {
    axios.get('/gallery').then((response) => {
        this.setState({
          GalleryItems: response.data,
        })
        console.log(response.data);
      }).catch((error)=> {
        console.log(error);
    });
  }

  loadItems = () => {
    console.log('in load items');
  }

  render(){
    return(
      <>
      {this.state.GalleryItems.map((image) => {
        
        return <GalleryItem image={image}/>
      })}
      <br/>
      Hello
      </>
    )
  }



}



export default GalleryList