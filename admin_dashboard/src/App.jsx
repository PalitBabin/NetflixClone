import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import { useContext } from "react";
import Login from "./pages/login/Login";
import { AuthContext } from "./context/authContext/AuthContext";
import ListOfLists from "./pages/listOfLists/listOfLists";
import List from "./pages/list/List";
import NewList from "./pages/newList/NewList";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ()=>{

  const { user } = useContext(AuthContext);


 if(user){
  return (
    <>
    <Header />
    <div className="container">
      <Sidebar />
      <Outlet />
    </div>
    </>
  )
}else{
   return <Navigate  to="/login" replace/>
 }
}


const App = () => {


  return (
    <BrowserRouter>
     
      <Routes>
              
              <Route path="/login" element={<Login />} />

              <Route element={<PrivateRoute />}>
              <Route path="/" element={ <Home />}/>
              <Route path="/users" element={<UserList />} />
              <Route path="/user/:userId" element={<User />} />
              <Route path="/newUser" element={<NewUser />} />
              <Route path="/movies" element={<ProductList />} />
              <Route path="/movie/:movieId" element={<Product />} />
              <Route path="/newMovie" element={<NewProduct />} />
              <Route path="/lists" element={<ListOfLists />} />
              <Route path="/list/:listId" element={<List />} />
              <Route path="/newList" element={<NewList />} />
              </Route>

              
      </Routes>

    </BrowserRouter>
  );
};

export default App;
