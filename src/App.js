import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Missions from './components/mission/Missions';
import Rockets from './components/rockets/RocketsList';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={<Rockets />}
        />
        <Route
          path="/Missions"
          element={<Missions />}
        />
        <Route
          path="/profile"
          element={<Profile />}
        />
      </Routes>
    </div>
  );
}

export default App;
