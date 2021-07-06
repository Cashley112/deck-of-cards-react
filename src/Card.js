import React, { Component } from 'react'
import './Card.css'

class Card extends Component {
    constructor(props) {
        super(props);
        let angle = Math.random() * 90 - 45;
        let xPos = Math.random() * 40 - 20;
        let yPos = Math.random() * 40 - 20;
        this._transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`
    }
    render() {
        // pick random angle and coordinates for card to be dealt on
        
        return (
            <img style={{transform: this._transform}} className="Card" alt={this.props.id} src={this.props.imgUrl}/>
        )
    }
}

export default Card;