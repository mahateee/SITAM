import { Link } from 'react-router-dom';
import { Switch, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Sidebar from './component/Sidebar';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Assests from './pages/Assets';
import Test from './pages/Test';
import TestShow from './pages/TestShow';
import TestEdit from './pages/TestEdit';



function App() {
  return (



    <>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/Asset' element={<Assests/>} />
        <Route path='/Asset/add' element={<Test/>} />
        <Route path='/Asset/show/:id' element={<TestShow/>} />
        <Route path='/Asset/edit/:id' element={<TestEdit/>} />



  
      </Routes>
    </>

  );
}

export default App;
