# Routing

Step 1: install package
> npm i react-router-dom

Step 2: import components from react-router-dom in app.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

 <Router>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/products" element={ <ProductPage /> } />
      </Routes>
    </Router>

Step 3: navbar component
import { Link } from 'react-router-dom';

 <Link className="nav-link" to="/products">
              Products
            </Link>