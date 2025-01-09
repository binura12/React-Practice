import { useState } from "react";
import "./App.css";
import Country from "./Country";
import Product from "./Product";

function App() {

  let [isLoggedIn, setIsLoggedIn] = useState(false);

  let [countries, setCountries] = useState(
    [
      { name: "India", Capital: "New Delhi", population: "1.4B" },
      { name: "Sri Lanka", Capital: "Sri Jayawaranapura", population: "20M" }
    ]
  )

  function loadNewCountries() {
    setCountries(
      [
        { name: "USA", Capital: "Washington D.C.", population: "331.7M" },
        { name: "China", Capital: "Beijing", population: "1.4B" }
      ]
    )
  }

  return (
    <div>
      <h1>Main Component</h1>

      <button onClick={loadNewCountries}>Load New Countries </button>

      <button onClick={() => {
        setIsLoggedIn(true);
      }}>Login</button>

      {
        isLoggedIn == false ?
          (<h1>Please Login</h1>) :
          countries.map((country) => {
            return (
              <Country name={country.name} Capital={country.Capital} population={country.population} key={country.name} />
            )
          })
      }
    </div>
  );
}

export default App;
