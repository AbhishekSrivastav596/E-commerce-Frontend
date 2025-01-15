import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Carousel from './components/Carousel'
import ProductList from './components/Data/ProductList';
import CartPage from './components/CartPage';
import { BrowserRouter as Router, Route, Routes,useLocation } from 'react-router-dom'

function App() {
  const location = useLocation();
  return (
  
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {location.pathname === '/' && <Carousel />}
      <main className="flex-grow">
      <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
      </main>
      <Footer />
    </div>

  );
}

export default function RootApp() {
  return (
    <Router>
      <App />
    </Router>
  );
};
