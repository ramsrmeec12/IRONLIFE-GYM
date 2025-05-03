import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Navbar from './components/navbar';
import Home from './components/home';

function App() {
  return (
    <div className='mx-auto px-2'>
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
      <Route path='' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
