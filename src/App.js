import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Navbar from './components/navbar';
import Home from './components/home';
import TermsAndConditions from './components/termsandcond';
import BlockedRoutesPage from './pages/Blockedroutes';

function App() {
  return (
    <div className='mx-auto '>
      <BrowserRouter>
        {/* <Navbar></Navbar> */}
        <Routes>
          <Route path='' element={<BlockedRoutesPage></BlockedRoutesPage>}></Route>
          {/* <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/Login' element={<Login></Login>}></Route>
          <Route path='/terms' element={<TermsAndConditions></TermsAndConditions>}></Route> */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
