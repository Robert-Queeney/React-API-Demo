import React, { Component } from 'react';
import Search from './SearchArea';
import Card from './CardArea';
import Testies from './TestArea';
import './App.css';

class App extends Component {

constructor (props){
    super(props);
    this.state = {
      cards: []
    };
    // If you dont use arrow function on the below methods, you need to bind them here
    //this.searchApi = this.searchApi.bind(this);
}
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
// This function is now being called in the handleSubmit in cardArea, it is just not deleting the movie
// cards[key] is undefined and it should be   that is a mistake
    deleteMovie = (key) => {
      // console.log("Clicked?")
      const cards={...this.state.cards};
      delete cards[key];
      // delete cards[index]; 
      this.setState({ cards: this.state.cards })
      console.log("deleted?")
      console.log(cards[key]) //dumb
      console.log(cards)
    }

  
  render() {
    return (
      <div className="App">
        <Search
          handleSubmit={this.searchApi}
        />
        <Card
          handleSubmit={this.deleteMovie}
          cards={this.state.cards}
        />
        <Testies
          cards={this.state.cards}
        />
      </div>
    );
  }
}






export default App;
