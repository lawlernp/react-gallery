import React, { Component } from 'react';
import axios from 'axios';



class GalleryItem extends Component {
    // setting boolean to use for conditional render of image click
        state = {
        showDesc: false,
    }
    // toggle for showDesc state
    displayDesc = () => {
        this.setState({
            showDesc: !this.state.showDesc
        })
        
    }
    // HTTP PUT request using items id to add a like to an image
    addLike = () => {
        axios.put(`/gallery/like/${this.props.item.id}`)
            .then(response => {
                console.log(response.data, this.props.item.id);
                // refresh state when liked, calling function from App.js
                this.props.getImages();
            }).catch((error)=> {
                console.log(error);
            });
    }



    render() {
        return(
            <>                
                <div className='imageContainer'>
                    {/* click listener for image/description toggle */}
                    <div onClick={this.displayDesc} className='image' key={this.props.item.id}> 
                    {/* conditional render for image/description based on boolean in state */}
                        {this.state.showDesc ?
                            <span>{this.props.item.description}</span>
                        :
                            <img src={this.props.item.path} width="100" height="100"/>
                        }
                    </div>          
                        <button onClick={this.addLike}>love it!</button>
                    <br/>
                    {/* conditional render checking for likes on an image object */}
                        {this.props.item.likes === 0 ?
                            `No people love this :(`
                        :
                            <span>{this.props.item.likes} people love this!</span>
                        }
                </div>
            </>
        )
    }
}

export default GalleryItem