import React, { Component } from 'react';
import './Deck.css';
import Card from './Card';

class Deck extends Component {
    render () {
        return (
            <div className="Deck">
                <h1>React Dice Demo</h1>
                <Card />
                <button>Gimme a Card!</button>
            </div>
        )
    }
}

export default Deck;