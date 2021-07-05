import React, { Component } from 'react';
import './Deck.css';
import Card from './Card';
import axios from 'axios';

const API_BASE_URL = 'https://deckofcardsapi.com/api/deck';

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
        let url = `${API_BASE_URL}/new/shuffle`;
        let response = await axios.get(url);
        let deckId = response.data.deck_id;
        this.setState({ deckId  })
    }
    async dealCard() {
        try {
            let url = `${API_BASE_URL}/${this.state.deckId}/draw`;
            let response = await axios.get(url);
            if (!response.data.success) {
                throw new Error('No card reamining!');
            }
            let card = response.data.cards[0];
            this.setState({
                cards: [...this.state.cards, card]
            });
        } catch(err) {
            alert(err);
        }   
    }
    displayCards() {
        return 
    }

    render () {
        const cards = 
            this.state.cards.map(card => (
                <Card 
                    imgUrl={card.image}
                    key={card.code}
                    id={card.code}
                />
            ))
        return (
            <div className="Deck">
                <h1>React Dice Demo</h1>
                <div>
                    {cards}
                </div>
                <button onClick={this.dealCard}>Gimme a Card!</button>
            </div>
        )
    }
}

export default Deck;