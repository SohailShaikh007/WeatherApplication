import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="">
          
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="">
          Sohail Shaikh
        </a>{" "}
        |
        <a target="_blank" href="">
          
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
