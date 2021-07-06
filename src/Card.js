import React, { Component } from 'react'
import './Card.css'

class Card extends Component {
    render() {
        // pick random angle and coordinates for card to be dealt on
        let angle = Math.random() * 90 - 45;
        let xPos = Math.random() * 40 - 20;
        let yPos = Math.random() * 40 - 20;
        let transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`
        console.log(transform);
        return (
            <img style={{transform: transform}} className="Card" alt={this.props.id} src={this.props.imgUrl}/>
        )
    }
}

export default Card;