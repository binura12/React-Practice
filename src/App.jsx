import { useState } from "react";
import "./App.css";
function App() {

  let [name,setName] = useState("");

  function handleInput(event) {
    setName(event.target.value);
  }

  return (
    <div className="data-form">
      <input type="text" onChange={handleInput} placeholder="Enter Name"/>
      <h1>{name}</h1>
    </div>
  )
}

export default App;