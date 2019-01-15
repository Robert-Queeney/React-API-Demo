import React from 'react';
// import Card from './Card'; 

// // Cannot get cards object here when I switch to a class 
class Cards extends React.Component{
    // if you want to access the cards object, you need to pass it in as props here and then set local state
      constructor(props){
          super(props)
          this.state = { cards: this.props.cards }
      }
    
      handleSubmit = () => {
        console.log("Please");
      }
    

      render(){
      const {cards} = this.state;
      console.log("CARDS", cards)

   
        return (
            <div className="cardStuff">
                <h1>There should be shit here</h1>
                <div className="card">{cards.map(card => (
                    <div className="cards" key={card.title}>
                        <div className="title">{card.Title}</div> 
                        <div className="year">{card.Year}</div>
                        <img className="poster" alt={card.Title} src={card.Poster} />
                        <button onClick={this.handleSubmit}>Button</button>
                    </div>
                ))}
                </div>
            </div>
        )
      } 
    }
    
        
    export default Cards; 