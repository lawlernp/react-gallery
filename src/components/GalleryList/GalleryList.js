import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'


class GalleryList extends Component {
  
  render(){
    return(
      <>
        <div className='galleryContainer'>
          {this.props.galleryArray.map((item) => {
            
            return <>
              <GalleryItem item={item} getImages={this.props.getImages}/>
            </>
          })}
        </div>
      </>
    )
  }
}



export default GalleryList