import React, { Component } from 'react';




class GalleryItem extends Component {

    render() {
        return(
            <div key={this.props.image.id}>
                test
                <img src={this.props.image.path}/>
            </div>
        )
    }
}

export default GalleryItem