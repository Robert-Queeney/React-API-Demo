import React from 'react';
// import Card from './Card'; 

const Cards = ({ cards }) => {
    console.log(cards, "Yo")

    return (
        <div className="cardStuff">
            <h1>There should be shit here</h1>
            <div className="card">{cards.map(card => (
                <div key={card.title}>
                    {card.Title} {card.Year}
                </div>
            ))}
            </div>
        </div>
    )
} 

    
export default Cards; 