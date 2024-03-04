import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import { Sidebar } from 'react-pro-sidebar';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/' element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
