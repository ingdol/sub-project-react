import './App.css';
import AxiosSpring from './components/AxiosSpring';
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
    </div>
  );
}

export default App;