import ProductList from "./pages/ProductList";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ProductDetails from "./pages/ProductDetails";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList/>}/>
        <Route path="/product/:id" element={<ProductDetails/>}/>
      </Routes>
    </Router>
  )
}
