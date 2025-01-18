import "./App.css";
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import About from "./Components/About";
import Product from "./Components/Product";
import Service from "./Components/Service";
import Home from "./Components/Home";
function App() {
  return (
    <div>
      <BrowserRouter>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
            <li>
              <Link to="/service">Service</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;