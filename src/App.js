import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto">
        <img src="backgroundImage.png"/>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
