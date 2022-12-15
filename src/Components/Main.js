import React, { useState } from "react";
import Card from "./Card" ;
import axios  from "axios";
 
const Main = () => {
    const[search, setSearch] = useState("");
    const[bookData,setBookData] =useState([]);

    const searchBook = (event) =>{
        if(event.key ==="Enter")
        {
           axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyBCL4v0acVhwbNj1gHl13rr8OetWRTdIZg'+'&maxResults=40').then(res=>setBookData(res.data.items))
           .catch(error=>console.log(error))
        }
    }
  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>
            A room without books is like a body without a soul.
          </h1>
        </div>
        <div className="row2">
          <h2>Find Your Book</h2>
          <div className="search">
            <input type="text" placeholder="Enter Book Name" value={search} onChange={e => setSearch(e.target.value)} onKeyPress={searchBook} />
            <button>
              <i class="fa-brands fa-searchengin"></i>
            </button>
          </div>
          <img src="./images/girlreading.jpg" alt="" />
        </div>
      </div>
      <div className="container">
        { 
         <Card book = {bookData} />
        }
       </div>
    </>
  );
};

export default Main;
