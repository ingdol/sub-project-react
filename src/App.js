import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import AxiosSpring from './components/AxiosSpring';
import SpaceClassList from './components/bch/SpaceClassList';
import QnaList from './components/sun/QnaList';
import Sun from './components/sun/Sun';

function App() {
  return (
    <div className="App">
      <AxiosSpring></AxiosSpring>
      <hr/>
      <Sun></Sun>
      <hr/>
      <QnaList></QnaList>
      <hr />
      <Link to="/SpaceClassList">[공간&클래스 조회] </Link>

      <Routes>
        <Route path="/SpaceClassList" element={<SpaceClassList />} />
      </Routes>
    </div>
  );
}

export default App;