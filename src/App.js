import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Add from './components/Add';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
<BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/add" element={<Add/>}/>
    </Routes>
</BrowserRouter>
  );
}

export default App;
