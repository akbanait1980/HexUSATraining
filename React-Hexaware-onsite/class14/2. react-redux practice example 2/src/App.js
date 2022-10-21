import ProductList from './components/ProductList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path='/' element={ <ProductList /> } />
          <Route path='/detail/:id' element={ <ProductDetail /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
