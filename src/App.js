import './App.css';
import AxiosSpring from './components/AxiosSpring';
import QnaTop from './components/sun/QnaTop';
import Sun from './components/sun/Sun';

function App() {
  return (
    <div className="App">
      <AxiosSpring></AxiosSpring>
      <hr/>
      <Sun></Sun>
      <hr/>
      <QnaTop></QnaTop>
    </div>
  );
}

export default App;