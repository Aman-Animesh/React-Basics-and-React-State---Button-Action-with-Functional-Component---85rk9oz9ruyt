import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [para, setpara] = useState("")

  const textChange= ()=>{
    setpara("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy");
  }
  return (
    <div id="main">
      <p id="para">{para} </p>
      <button onClick={textChange} id="click">Click</button>
    </div>
  );
}


export default App;
