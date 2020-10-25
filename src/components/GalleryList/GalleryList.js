import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'


class GalleryList extends Component {
  
  render(){
    return(
      <>
        <div className='galleryContainer'>
          {/* looping through our array of image data and making a call to render GalleryItem for each of them */}
          {this.props.galleryArray.map((item) => {
            
            return <>
            {/* passing 'item' through for each image data object in our array & continuing to pass getImages down from App.js */}
              <GalleryItem item={item} getImages={this.props.getImages}/>
            </>
          })}
        </div>
      </>
    )
  }
}



export default GalleryList