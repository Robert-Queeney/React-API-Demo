import React from 'react'; 

class Search extends React.Component {

    // constructor(props){
    //     super(props);
    // }

// Need to get the handleSubmit to take the searchApi function and return the movie object
    handleSubmit = (event) => {
        event.preventDefault(); 
        const text = event.target.text.value; 
        this.props.handleSubmit(text); 
        console.log(text)
    }


    render(){
        return(
            <div className="search-wrapper">
                <h1>Please search for a movie title</h1>
                <form onSubmit={this.handleSubmit} className="add-movie">
                    <input name="text" placeholder="Movie Title" ></input>
                    <button type="submit">+ Add Movie</button>
                </form>
            </div>
        )
    }
}

export default Search; 