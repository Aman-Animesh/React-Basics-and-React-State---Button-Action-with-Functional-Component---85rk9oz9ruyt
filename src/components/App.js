import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [para, setpara] = useState("")

  const textChange= ()=>{
    setpara("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy");
  }
  return (
    <div id="main">
      
      <button onClick={textChange} id="click">Click</button>
<pre id="para">{para}</pre>
    </div>
  );
}


export default App;
