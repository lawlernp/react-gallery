import React, { Component } from 'react';



class GalleryItem extends Component {



        state = {
        showDesc: false
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
                </div>          

            </>
        )
    }
}

export default GalleryItem