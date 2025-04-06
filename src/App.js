import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import UploadModel from './pages/uploadmodel';
import Marketplace from './pages/marketplace';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <a href="/">Home</a> | 
          <a href="/login">Login</a> | 
          <a href="/upload">Upload</a> | 
          <a href="/marketplace">Marketplace</a>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/upload" element={<UploadModel />} />
          <Route path="/marketplace" element={<Marketplace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
