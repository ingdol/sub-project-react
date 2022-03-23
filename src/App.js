import QnaList from './components/sun/QnaList';
import Navbar from './components/main/Navbar';
import Main from './components/main/Main';
import React from 'react';
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Intro from './components/Create/intro';
import QnaTop from './components/sun/QnaTop';

import QnaInsert from './components/sun/QnaInsert';
import QnaDetailView from './components/sun/QnaDetailView';
import QnaUpdate from './components/sun/QnaUpdate';
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
        <Route path="/SpaceClassList" element={<SpaceClassList/>} />
      </Routes>

      {/* 서연 Routes */}
      <Routes>
        <Route path="/qnalist" element={<QnaList/>} />
        <Route path="/qnaInsert" element={<QnaInsert />} />
        <Route path="/qnadetailview/:hostqnaNo" element={<QnaDetailView></QnaDetailView>} />
        <Route path="/qnaupdate/:hostqnaNo" element={<QnaUpdate></QnaUpdate>} />
      </Routes>
    </div>
  );
}

export default App;