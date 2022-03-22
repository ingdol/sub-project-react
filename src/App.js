import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import AxiosSpring from './components/AxiosSpring';
import Intro from './components/Create/intro';
import QnaTop from './components/sun/QnaTop';
import SpaceClassList from './components/bch/SpaceClassList';
import QnaList from './components/sun/QnaList';
import Sun from './components/sun/Sun';
import Navbar from './components/main/Navbar';
import Main from './components/main/Main';


function App() {
  return (
    <div className="App">
      <div className="Nav">
        <Navbar />
      </div>
      <Main></Main>
      <Intro></Intro>
      {/* <AxiosSpring></AxiosSpring> */}
      <QnaTop></QnaTop>
      <hr />
      <Link to="/SpaceClassList">[공간&클래스 조회] </Link>
      <Routes>
        <Route path="/SpaceClassList" element={<SpaceClassList />} />
      </Routes>
    </div>
  );
}

export default App;