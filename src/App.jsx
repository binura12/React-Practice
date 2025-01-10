import { useState } from "react";
import "./App.css";
function App() {

  let [name, setName] = useState("John Doe");
  let [animals, setAnimals] = useState(["Cat", "Dog", "Parrot"]);

  function addAnimals() {
    setAnimals((prevArr)=>{
      return[...prevArr,"Deer"];
    })
  }

  // when we calling the prvName it logging the previous value

  function changeName() {
    setName((prvName)=>{
      return "Binura";
    })
  }

  return(
    <div>
      <h1>{name}</h1>
      <button onClick={changeName}>Change Name</button>

      {
        animals.map((animals, index)=>{
          return (
            <h2 key={index}>{animals}</h2>
          )
        })
      }

      <button onClick={(addAnimals)}>Add new Animal</button>
    </div>
  )
}

export default App;