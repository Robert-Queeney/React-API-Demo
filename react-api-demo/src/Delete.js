import React from 'react'; 

// Tried to bring the delete button out to a new component
const Button = (props)=>{
    return(
        <button className="delete-button" onClick={props.deleteMovie}>- Remove Movie</button>
    )
}

export default Button; 