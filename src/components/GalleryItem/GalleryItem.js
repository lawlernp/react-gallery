import React, { Component } from 'react';




class GalleryItem extends Component {

    render() {
        return(
            <div className='image' key={this.props.item.id}> 
                <img src={this.props.item.path} width="100" height="100"/>
            </div>
        )
    }
}

export default GalleryItem