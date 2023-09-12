import express from "express";
import { registerUser,loginUser } from "../controller/auth-controller.js";
import { verifyToken } from "../controller/verifyToken.js";
import { updateUser,deleteUser,getUser, getAllUser,getUsersStats } from "../controller/users-controller.js";
import { createMovie, deleteMovie, getMovie, updateMovie,getRandomMovie, getAllMovie } from "../controller/movies-controller.js";
import { createList, deleteList, getList } from "../controller/list-controller.js";


const route = express.Router();
//AUTHENTICATION ROUTES
route.post("/register",registerUser);
route.post("/login",loginUser);
//USERS ROUTES
route.put("/user/update/:id",verifyToken,updateUser);
route.delete("/user/delete/:id",verifyToken,deleteUser);
route.get("/user/find/:id",getUser);
route.get("/users",verifyToken,getAllUser);
route.get("/stats",getUsersStats);
//MOVIES ROUTES
route.post("/movie/create",verifyToken,createMovie);
route.put("/movie/update/:id",verifyToken,updateMovie);
route.delete("/movie/delete/:id",verifyToken,deleteMovie);
route.get("/movie/find/:id",verifyToken,getMovie);
route.get("/random/find",verifyToken,getRandomMovie);
route.get("/movies",verifyToken,getAllMovie);
//LIST ROUTES
route.post("/list/create",verifyToken,createList);
route.delete("/list/delete/:id",verifyToken,deleteList);
route.get("/lists",verifyToken,getList);
export default route;