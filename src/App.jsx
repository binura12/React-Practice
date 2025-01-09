import { useState } from "react";
import "./App.css";
import Product from "./Product";
function App() {
  let [showProduct, setShowProduct] = useState(true);

  return (
    <div>

      <h1>UseEffect Demo</h1>

      <button onClick={()=>{
        setShowProduct(!showProduct);
      }}>Disable Product</button>

      {
        showProduct === true ? (<Product/>) : (null)
      }

    </div>
  );
  
}

export default App;