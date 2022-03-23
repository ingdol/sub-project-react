import QnaList from './components/sun/QnaList';
import Sun from './components/sun/Sun';
import Navbar from './components/main/Navbar';
import Main from './components/main/Main';
import React from 'react';
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Intro from './components/Create/intro';
import QnaTop from './components/sun/QnaTop';
import SpaceClassList from './components/bch/SpaceClassList';


function App() {
  return (
    <div className="App">
      <div className="Nav">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/QnaTop" element={<QnaTop />} />
        <Route path="/Intro" element={<Intro />} />
        <Route path="/SpaceClassList" element={<SpaceClassList />} />
      </Routes>
    </div>
  );
}

export default App;