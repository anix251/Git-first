import React from "react";

function Book(){
    return(
        <div>
            <img src="" width={100} height={100} alt="book"/>
            <h2>Title:ReactJS</h2>
            <h2>Price:₹465</h2>
            <button>Add To Cart</button>

        </div>
    )
}
function App(){
    return(
        <div>
            <h1>
                <center>My Book Store</center>
            </h1>
            <div>
                <Book/>
            </div>
        </div>

    )
}

const parent=document.getElementById("root");
const root=ReactDOM.createRoot(parent);