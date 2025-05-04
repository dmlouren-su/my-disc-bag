import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Add from './pages/Add';
import Track from './pages/Track';
import Stats from './pages/Stats';
import Navbar from './components/Navbar';

const App = () => {
  const [discs, setDiscs] = useState([]);  

  const handleAddDisc = (newDisc) => {
    setDiscs([...discs, { ...newDisc, throws: [] }]);
  };

  const handleTrackThrow = (discName, throwData) => {
    setDiscs(prevDiscs =>
      prevDiscs.map(disc =>
        disc.name === discName
          ? { ...disc, throws: [...disc.throws, throwData] } 
          : disc
      )
    );
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Home discs={discs} />} />
            <Route path="/add" element={<Add onAddDisc={handleAddDisc} />} />
            <Route path="/track" element={<Track discs={discs} onTrackThrow={handleTrackThrow} />} />
            <Route path="/stats" element={<Stats discs={discs} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
