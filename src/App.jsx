import { useState } from "react";
import "./App.css";
function App() {

  let [name,setName] = useState("");
  let [email,setEmail] = useState("");

  function handleInput(event) {
    setName(event.target.value);
  }

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  return (
    <div className="data-form">

      <button onClick={()=>{
        setName("Binura")
      }}>Change Name</button>

      {/* two way data Binding */}
      <input type="text" onChange={handleInput} placeholder="Enter Name" value={name}/>

      {/* one way data Binding */}
      <input type="text" onChange={handleEmail} placeholder="Enter Email"/>

      <h1>{name}</h1>
      <h1>{email}</h1>
      
    </div>
  )
}

export default App;