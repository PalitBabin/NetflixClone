import axios from "axios";
import { loginFailure, loginStart, loginSuccess,logout } from "../../context/authContext/AuthActions";
import { BACKEND_BASE_URL } from "../../config";
const URL = BACKEND_BASE_URL;

export const registerUser = async(data)=>{
    try{
        await axios.post(`${URL}/register`,data);
    }catch(err){
        console.log('Error while registering user',err);
    }
}
export const loginUser = async(user,dispatch)=>{
    try{
        dispatch(loginStart());
        const response = await axios.post(`${URL}/login`,user);
         dispatch(loginSuccess(response.data));
    }catch(err){
        dispatch(loginFailure());
    }
}

export const logoutUser = (dispatch)=>{
    dispatch(logout());
}