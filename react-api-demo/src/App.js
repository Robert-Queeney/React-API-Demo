import React, { Component } from 'react';
import Search from './SearchArea';
import Card from './CardArea';
import './App.css';

class App extends Component {

constructor (props){
    super(props);
    this.state = {
      cards: []
    };
    // below gives me an error
    //this.searchApi = this.searchApi.bind(this);
}

  // Trying to update state without the API call 
  // addToCards = event => {
  //   let text=event.target.value;
  //   this.setState({ text })
  // }

  // async searchApi(text) {
  //   const that= this;
  //   let url = 'http://www.omdbapi.com/?t='+text+'&apikey=d9f3b76b'
  //   const response = await fetch(url)
  //   const data = await response.json();
  //   that.setState({ cards: data })
  // }

  

  searchApi = (text) => {
    let url = 'http://www.omdbapi.com/?t='+text+'&apikey=d9f3b76b'
    // const that=this;    tried pulling state into a varilable but it still said setState was not a function
    fetch(url)
      .then(response => response.json()).then(cards => {
        // console.log(cards, "This is it");
        // console.log(cards.length, "length");
        this.state.cards.push(cards) 
        this.setState({ cards: this.state.cards })
      })
  }

  // cardRender = ({ data }) => {
  //   let cardArray = this.cards.map(data.title)
  //   return cardArray
  // }

  
  render() {
    return (
      <div className="App">
        <Search
          handleSubmit={this.searchApi}
        />
        <Card
          cards={this.state.cards}
        />
      </div>
    );
  }
}






export default App;
