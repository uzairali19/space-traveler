import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Rockets from './components/Rockets';
import Missions from './components/Missions';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/Rockets" element={<Rockets />} />
        <Route path="/Missions" element={<Missions />} />
      </Routes>
    </div>
  );
}

export default App;
