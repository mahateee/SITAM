import { Link } from 'react-router-dom';
import { Switch, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Sidebar from './component/Sidebar';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AssetsForm from './pages/AssetsForm';
import AssetsTable  from './pages/AssetsTable';
function App() {
  return (



    <>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/AssetsTable' element={<AssetsTable />} />
        <Route path='/AssetsForm' element={<AssetsForm />} />

      </Routes>
    </>

  );
}

export default App;
