import React, { Component } from 'react';
import axios from 'axios';



class GalleryItem extends Component {

        state = {
        showDesc: false,
    }

    displayDesc = () => {
        this.setState({
            showDesc: !this.state.showDesc
        })
        
    }

    addLike = () => {
        axios.put(`/gallery/like/${this.props.item.id}`)
            .then(response => {
                console.log(response.data, this.props.item.id);
                this.props.getImages();
            }).catch((error)=> {
                console.log(error);
            });
    }



    render() {
        return(
            <>                
                <div className='imageContainer'>
                    <div onClick={this.displayDesc} className='image' key={this.props.item.id}> 
                        {this.state.showDesc ?
                            <span>{this.props.item.description}</span>
                        :
                            <img src={this.props.item.path} width="100" height="100"/>
                        }
                    </div>          
                        <button onClick={this.addLike}>love it!</button>
                    <br/>
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