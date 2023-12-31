
import './App.scss';
import Login from "./component/pages/login/Login";
import Register from './component/pages/register/Register';
import Home from './component/pages/home/Home';
import Watch from './component/pages/watch/Watch';
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './context/authContext/AuthContext';


function App() {

  const {user} = useContext(AuthContext);

  return (
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={user ? <Home /> : <Navigate to="/register" replace={true} />} />
      <Route path="/register" element={!user ? <Register /> : <Navigate to="/" replace={true} />} />
      <Route path="/login" element={!user ? <Login /> : <Navigate to="/" replace={true} />} />
      {
        user && 
      <>
      <Route path="/movies" element={<Home type= "movie"/>}/>
      <Route path="/series" element={<Home type= "series"/>}/>
      <Route path="/watch" element={<Watch />}/>
      </>
      }
    </Routes>
    </BrowserRouter>
  );
}

export default App;
