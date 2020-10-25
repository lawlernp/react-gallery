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
    // this.setState({
    //   GalleryItems : this.props.imagesArray.
    // })
  }
  render(){
    return(
      <>
      {this.state.GalleryItems.map((image) => {
        
        return <GalleryItem image={image}/>
      })}
      {JSON.stringify(this.state.GalleryItems)}
      Hello
      </>
    )
  }



}



export default GalleryList