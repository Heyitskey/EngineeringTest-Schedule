import logo from './logo.svg';
import './App.css';
import { Scheduling } from './Components/Scheduling';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Scheduling/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
