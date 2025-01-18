import "./App.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from "./Components/About";
import Product from "./Components/Product";
import Service from "./Components/Service";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/service" element={<Service/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;