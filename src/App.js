import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Carousel from "./components/Carousel";
import ProductList from "./components/Data/ProductList";
import CartPage from "./components/CartPage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import ProfilePage from "./components/ProfilePage";

function layout(element, setIsAuthenticated) {
  return (
    <>
      <Navbar setIsAuthenticated={setIsAuthenticated} />
      {element}
      <Footer />
    </>
  );
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="App font-bold">
      <Router>
        <Routes>
          <Route path="/login" element={isAuthenticated ? (<Navigate to="/" replace />) : (<LoginPage setIsAuthenticated={setIsAuthenticated}/>)}/>
          <Route path="/profile" element={isAuthenticated ? (layout(<ProfilePage />, setIsAuthenticated)) : (<Navigate to="/login" />) }/>
          <Route path="/" element={layout(<><Carousel /><ProductList /></>, setIsAuthenticated)} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/cart" element={isAuthenticated ? (layout(<CartPage />, setIsAuthenticated)) : ( <Navigate to="/login" />)}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
