import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './component/Navbar';
import Home from './component/Home';
import Add from './component/Add';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Add' element={<Add />}></Route>
        </Routes>
    </div>
  );
}

export default App;
