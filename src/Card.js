import React, { Component } from 'react'
import './Card.css'

class Card extends Component {
    render() {
        return (
            <div className="Card">
                <img alt={this.props.id} src={this.props.imgUrl}/>
            </div>
        )
    }
}

export default Card;