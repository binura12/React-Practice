import { useState } from "react";
import "./App.css";
function App() {

  let [details, setDeatils] = useState({})

  function handleInput(event) {
    console.log(event);

    setDeatils((prevObj) => {
      return { ...prevObj, [event.target.name]: event.target.value }
    })
    console.log(details);

  }

  return (
    <div className="data-form">

      <input type="text" name='name' onChange={handleInput} placeholder="Enter Name" /> <br />

      <input type="text" name='email' onChange={handleInput} placeholder="Enter Email" />

    </div>
  )
}

export default App;