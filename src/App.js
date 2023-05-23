import { Link } from 'react-router-dom';
import { Switch, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Sidebar from './component/Sidebar';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Assests from './pages/Assets';


function App() {
  return (



    <>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/Asset' element={<Assests/>} />

  
      </Routes>
    </>

  );
}

export default App;
