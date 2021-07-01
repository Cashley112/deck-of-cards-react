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
        this.dealCard = this.dealCard.bind(this);
    }
    async componentDidMount() {
        let url = "https://deckofcardsapi.com/api/deck/new/shuffle";
        let response = await axios.get(url);
        let deckId = response.data.deck_id;
        this.setState({ deckId  })
    }
    async dealCard() {
        let url = `https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw`;
        let response = await axios.get(url);
        let card = response.data.cards[0];
        this.setState({
            cards: [...this.state.cards, card]
        })
    }
    displayCards() {
        return this.state.cards.map(card => (
            <Card 
                imgUrl={card.image}
                key={card.code}
                id={card.code}
            />
        ))
    }

    render () {
        return (
            <div className="Deck">
                <h1>React Dice Demo</h1>
                {this.displayCards()}
                <button onClick={this.dealCard}>Gimme a Card!</button>
            </div>
        )
    }
}

export default Deck;