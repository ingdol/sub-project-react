import './App.css';
import AxiosSpring from './components/AxiosSpring';
import Intro from './components/Create/intro';
import QnaTop from './components/sun/QnaTop';
import Sun from './components/sun/Sun';


function App() {
  return (
    <div className="App">
      <Intro></Intro>
      <AxiosSpring></AxiosSpring>
      <hr/>
      <Sun></Sun>
      <hr/>
      <QnaTop></QnaTop>
    </div>
  );
}

export default App;