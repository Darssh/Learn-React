import React from 'react';
import './github-cards-list.css';
import axios from 'axios';

const Card = (props) => {
    return (
        <div className="default"> 
            <img width="75" src={props.avatar_url} alt="Profile Pic" />
            <div className="info">
                <div className="info-name">{props.name}</div>
                <div>{props.company}</div>
            </div>
        </div>
    );
};

const CardList = (props) => {
    return (
        <div>
            {props.cards.map(card => <Card key={card.id} {...card} />)}
        </div>
    );
};

class Form extends React.Component {
    state = {
        userName: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();
        axios.get(`https://api.github.com/users/${this.state.userName}`)
            .then(resp => {
                this.props.onSubmit(resp.data);
                this.setState({userName: ''});
            });
    };

    render() {
        return (
            <form className="default form-inline" onSubmit={this.handleSubmit}>
                <input className="form-control" type="text" 
                    value={this.state.userName}
                    onChange={(event) => this.setState({userName: event.target.value })}
                    placeholder="Github Username" />
                <button className="btn btn-primary" type="submit">Add card</button>
            </form>
        );
    }
}

class App extends React.Component {
    state = {
        cards : [
        ]
    };

    addNewCard = (cardInfo) => {
        this.setState(prevState => ({
            cards: prevState.cards.concat(cardInfo)
        }));
    };

    render() {
        return (
            <div>
                <Form onSubmit={this.addNewCard}/>
                <CardList cards={this.state.cards} />
            </div>
        );
    }
}


export default App;
