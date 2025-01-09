import { useState } from "react";
import "./App.css";
import Country from "./Country";
import Product from "./Product";

function App() {

  let [countries, setCountries] = useState(
    [
      {name: "India", Capital: "New Delhi", population: "1.4B"},
      {name: "Sri Lanka", Capital: "Sri Jayawaranapura", population: "20M"},
      {name: "France", Capital: "Paris", population: "2.5B"},
      {name: "Australia", Capital: "Canaberra", population: "67.5M"}
    ]
  )

  return (
    <div>
      <h1>Main Component</h1>
      {/* <Product name="Iphone XR" price="71000/=" specs={{ram:"3GB",size:"19cm"}}/>
      <Product name="Iphone 11" price="85000/=" specs={{ram:"3GB",size:"19cm"}}/>
      <Product name="Iphone 14" price="285000" specs={{ram:"3GB",size:"19cm"}}/> */}

      <Country name={countries[0].name} Capital={countries[0].Capital} population={countries[0].population}/>
    </div>
  );
}

export default App;
