// import React from 'react';
// import Navbar from './components/Navbar/Navbar';
// import Footer from './components/Footer/Footer';
// import Carousel from './components/Carousel'
// import ProductList from './components/Data/ProductList';
// import CartPage from './components/CartPage';
// import { BrowserRouter as Router, Route, Routes,useLocation } from 'react-router-dom'

// function App() {
//   const location = useLocation();
  
//   return (
  
//     <div className="flex flex-col min-h-screen">
//       <Navbar />
//       {location.pathname === '/' && <Carousel />}
//       <main className="flex-grow">
//       <Routes>
//             <Route path="/" element={<ProductList />} />
//             <Route path="/cart" element={<CartPage />} />
//           </Routes>
//       </main>
//       <Footer />
//     </div>

//   );
// }

// export default function RootApp() {
//   return (
//     <Router>
//       <App />
//     </Router>
//   );
// };
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Carousel from "./components/Carousel";
import ProductList from "./components/Data/ProductList";
import CartPage from "./components/CartPage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";

function layout(element) {
  return (
    <>
      <Navbar />
      {element}
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="App font-bold">
      <Router>
        <Routes>

          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={layout(<><Carousel /><ProductList /></>)} />
          <Route path="/cart" element={layout(<CartPage />)} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
