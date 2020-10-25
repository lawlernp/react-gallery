import React, { Component } from 'react';



class GalleryItem extends Component {



        state = {
        showDesc: false,
        likes: this.props.item.likes
    }

    displayDesc = () => {
        console.log(this.state.showDesc);
        this.setState({
            showDesc: !this.state.showDesc
        })
        
    }



    render() {
        return(
            <>
                {/* conditional render using ternary operator*/}
                <div onClick={this.displayDesc} className='image' key={this.props.item.id}> 
                {this.state.showDesc ?
                    <span>{this.props.item.description}</span>
                :
                    <img src={this.props.item.path} width="100" height="100"/>
                }
                <button onClick={this.displayDesc}>LoveIt!</button>
                <span>{this.state.likes}</span>
                </div>          

            </>
        )
    }
}

export default GalleryItem