  
import React from "react";
import "./App.css";
import Login from './login';


export default function App(){

  return(
    <div className="container">
         <div className="box">

          <div className="header">
               <h1>Voosh</h1>

          </div>

          <div className="register">
              
          <Login/>
          </div>

          <div>
          
           </div>
         </div>
    </div>
  )
}