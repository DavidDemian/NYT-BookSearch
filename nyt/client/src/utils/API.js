import axios from "axios";



export default {
  getBook: function(query) {
    
    return axios.get("/api/books/" + query);
    
  },

  saveBook: function(id){
    return axios.get("/api/save/" + id)
  },

  getBooks: function(){
    return axios.get("/api/saved")
  }

};