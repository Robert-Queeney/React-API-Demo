import React from 'react';
// import Card from './Card'; 


class Cards extends React.Component{
    // if you want to access the cards object, you need to pass it in as props here and then set local state
      constructor(props){
          super(props)
          this.state = { cards: this.props.cards }
      }
    
    //   this is now calling the deleteMovie function in App.js
      handleSubmit = (key) => {
        // event.preventDefault();
        this.props.handleSubmit(key)
        console.log("WTF?")
        
      }
    

      render(){
      const {cards} = this.state;
    //   console.log("CARDS", cards)

   
        return (
            <div className="cardStuff">
                <h1>Here are the movies you have selected:</h1>
                <div className="card">{cards.map(card => (
                    <div className="cards" key={card.Title}>
                        <div className="title">{card.Title}</div> 
                        <div className="year">{card.Year}</div>
                        <img className="poster" alt={card.Title} src={card.Poster} />
                        <button onClick={this.handleSubmit}>Button</button>
                        {/* tried bringing deleteMovie straight into the burtton, that also dis not work */}
                        {/* <button onClick={() => this.props.deleteMovie(this.props.index)}>Button</button> */}
                    </div>
                ))}
                </div>
            </div>
        )
      } 
    }
    
        
    export default Cards; 