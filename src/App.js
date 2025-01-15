import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Carousel from './components/Carousel'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto">
        <Carousel/>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
