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
import CreateClass from './components/Create/CreateClass';
import CreateClass2 from './components/Create/CreateClass2';

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
        <Route path="/CreateClass" element={<CreateClass />} />
        <Route path="/CreateClass2" element={<CreateClass2 />} />
      </Routes>
    </div>
  );
}

export default App;