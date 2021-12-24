import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Rockets from './components/rockets/RocketsList';
import Missions from './components/Missions';
import RocketProfile from './components/RocketProfile';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/Rockets" element={<Rockets />} />
        <Route path="/Missions" element={<Missions />} />
        <Route path="/Profile" element={<RocketProfile />} />
      </Routes>
    </div>
  );
}

export default App;
