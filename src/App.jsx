import { useState } from "react";
import "./App.css";
function App() {

  let [details, setDeatils] = useState({
    name:"",
    email:""
  })

  function handleInput(event) {
    setDeatils((prevObj) => {
      return { ...prevObj, [event.target.name]: event.target.value }
    })

  }

  function handleSubmit() {
    console.log(details);
    
  }

  return (
    <div className="data-form">

      <input type="text" name='name' onChange={handleInput} placeholder="Enter Name" value={details.name}/> <br />

      <input type="text" name='email' onChange={handleInput} placeholder="Enter Email" value={details.email}/>
      
      <button onClick={handleSubmit}>Submit</button>

    </div>
  )
}

export default App;