import { Link } from 'react-router-dom';
import { Switch, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Sidebar from './component/Sidebar';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Assests from './pages/Assets';
import AddAsset from './pages/AddAsset';
import ShowPage from './pages/ShowPage';
import EditPage from './pages/EditPage';
import Barcode from 'react-barcode';


function App() {
  return (



    <>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/Asset' element={<Assests/>} />
        <Route path='/Asset/add' element={<AddAsset/>} />
        <Route path='/Asset/show/:id' element={<ShowPage/>} />
        <Route path='/Asset/edit/:id' element={<EditPage/>} />

        
      </Routes>
    </>

  );
}

export default App;
