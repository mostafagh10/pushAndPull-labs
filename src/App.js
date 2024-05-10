import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Products from './products';
import ProductDetails from './productdetails';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Register from './register';

function App() {
  return (
    <div className='App mt-5'>
        <Router>
        <Routes>
          <Route exact path="/" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        </Router>
      </div>
  );
}

export default App;