import logo from './logo.svg';
import Button from 'react-bootstrap/Button';
import './App.css';
import AjaxHooks from './Components/AjaxHooks';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App-header-2">
      <h1>
          Reaper's Pokedex.
      </h1>
      <AjaxHooks/>   
    </div>
  );
}

export default App;
