import axios from "axios";
import { createMovieFailure, createMovieStart, createMovieSuccess, deleteMovieFailure, deleteMovieStart, deleteMovieSuccess, getMoviesFailure, getMoviesStart, getMoviesSuccess } from "./MovieActions";
import { BACKEND_BASE_URL } from "../../config";

const URL = BACKEND_BASE_URL;
const token= JSON.parse(localStorage.getItem("user")).accessToken;
//GET MOVIE
export const getMovies = async(dispatch)=>{
    try{
        dispatch(getMoviesStart());
        const response = await axios.get(`${URL}/movies`,{headers:{authorization: `Bearer ${token}`}});
        dispatch(getMoviesSuccess(response.data));
    }catch(err){
    dispatch(getMoviesFailure());
    }
}
//CREATE MOVIE
export const createMovie = async(movie,dispatch)=>{
    try{
        dispatch(createMovieStart());
         const response = await axios.post(`${URL}/movie/create`,movie,{headers:{authorization: `Bearer ${token}`}});
        dispatch(createMovieSuccess(response.data));
    }catch(err){
    dispatch(createMovieFailure());
    }
}
//DELETE MOVIE
export const deleteMovie = async(id,dispatch)=>{
    try{
        dispatch(deleteMovieStart());
         await axios.delete(`${URL}/movie/delete/${id}`,{headers:{authorization: `Bearer ${token}`}});
        dispatch(deleteMovieSuccess(id));
    }catch(err){
    dispatch(deleteMovieFailure());
    }
}