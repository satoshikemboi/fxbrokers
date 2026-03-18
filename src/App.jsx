import React from 'react';
import { Routes, Route } from 'react-router-dom'; // No "Router" here!
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Trusted from './components/Trusted';
import Brokers from './pages/Brokers';
import Reviews from './pages/Reveiws';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <Trusted />
          </>
        } />
        <Route path="/brokers" element={<Brokers />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </>
  );
}

export default App;