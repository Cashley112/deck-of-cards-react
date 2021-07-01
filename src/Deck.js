import React, { Component } from 'react';
import './Deck.css';
import Card from './Card';
import axios from 'axios';

class Deck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deckId: '',
            cards: []
        };
    }
    async componentDidMount() {
        let url = "https://deckofcardsapi.com/api/deck/new/shuffle";
        let response = await axios.get(url);
        let deckId = response.data.deck_id;
        this.setState({ deckId  })
    }
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