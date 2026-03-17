import React from 'react';
import { Routes, Route } from 'react-router-dom'; // No "Router" here!
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Trusted from './components/Trusted';
import Brokers from './pages/Brokers';

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
      </Routes>
    </>
  );
}

export default App;