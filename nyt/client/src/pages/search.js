import React, { Component } from "react";
import Navbar from "../components/navbar/navbar";
import API from "../utils/API";
import "../index.css"



class SearchPage extends Component {

    state = {
        results: [],
        searched: ""
    }

    handleInputChange = event => {

        const { value } = event.target;
        this.setState({
            searched: value
        });

    };

    handleFormSubmit = event => {
        event.preventDefault();

        API.getBook(this.state.searched)
            .then(result => this.setState({ results: result.data.items }))
            .catch(err => console.log(err));


        console.log(this.state.books)


    };

 save= event => {
     event.preventDefault();
     const { value } = event.target;
    

     API.saveBook(value) 
 }

    render() {
        return (

            <div>
                {console.log(this.state.results)}
                <Navbar />
                <form className="search">
                    <div className="form-group">
                        <label htmlFor="breed">Book:</label>
                        <input
                            value={this.state.searched}
                            onChange={this.handleInputChange}
                            name="books"
                            type="text"
                            className="form-control"
                            placeholder="Search for any book"
                            id="bookInput"
                        />

                        <button type="submit" onClick={this.handleFormSubmit} className="btn btn-success">
                            Search
                </button>
                       
                    </div>
                </form>
                <div class="container">

                    {
                        this.state.results.map(book => {
                            return (
                                <div className="card">
                                    <img src={book.volumeInfo.imageLinks.smallThumbnail} class="card-img-top myImg" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{book.volumeInfo.title}</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                        <button type="submit" onClick={this.save} className="btn btn-success" value={book.id}>
                            Save Article
                </button>
                                    </div>
                                </div>
                            )
                        })
                    }








                </div>
            </div>
        )
    }
}


export default SearchPage;