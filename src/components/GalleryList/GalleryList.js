import React, { Component } from 'react';

class GalleryList extends Component {
  state = {
    GalleryItems : {},
    }


  componentDidMount = () => {
    console.log('GalleryList.js mounted');
    this.loadItems()
  }

  loadItems = () => {
    this.props.imagesArray.map((image) => {
        return this.setState ({
            ...this.state.GalleryItems,
            GalleryItems: image
        })
  
    


export default GalleryList