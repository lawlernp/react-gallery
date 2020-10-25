import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'


class GalleryList extends Component {
  
  
  state = {
    GalleryItems : [],
    }


  componentDidMount = () => {
    console.log('GalleryList.js mounted');
    this.loadItems()
  }


  loadItems = () => {
    console.log('in load items');
  }

  render(){
    return(
      <>
      {this.props.galleryArray.map((item) => {
        
        return <GalleryItem item={item}/>
      })}
      <br/>
      Hello
      </>
    )
  }



}



export default GalleryList