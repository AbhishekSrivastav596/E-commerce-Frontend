import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Carousel from './components/Carousel'
import ProductList from './components/Data/ProductList';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Carousel/>
      <main className="flex-grow">
        <ProductList/>
      </main>
     
      <Footer />
    </div>
  );
}

export default App;
