import React, { Component } from "react";
import Navbar from "../components/navbar/navbar";
import API from "../utils/API";
import "../index.css"



class SavedPage extends Component {

    state = {
        saved: [],
    }

    componentWillMount() {
        this.loadBooks()
    }
    
    loadBooks = () => {
        
        API.getBooks().then(result => this.setState({saved : result.data}))
        
       
    
    }
   


    

 

    render() {
        return (

            <div>
              
                <Navbar />
                
                <div class="container">

                    {
                        this.state.saved.map(book => {
                            return (
                                <div className="card">
                                    <img className ="myImg card-img-top" src={book.image}  alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{book.title}</h5>
                                        <h5 className="card-title">{book.author}</h5>
                                        <p className="card-text">{book.des}</p>
                                        <a href={book.link} class="btn btn-primary">Go somewhere</a>
                                        
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


export default SavedPage;






