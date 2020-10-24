import React, { Component } from 'react';

class GalleryList extends Component {
  
  render(){
    return(
      <>
      Hello
      </>
    )
  }

  state = {
    GalleryItems : {},
    }


  componentDidMount = () => {
    console.log('GalleryList.js mounted');
    this.loadItems()
  }

  loadItems = () => {
    console.log('in load items');
  }



}


export default GalleryList