import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/products/:catName/:catId" element={ <ProductPage /> } />
        <Route path="/products/detail/:id" element={ <ProductDetailPage /> } />
      </Routes>
    </Router>
  );
}

export default App;
