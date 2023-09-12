import axios from "axios";
import { loginFailure, loginStart, loginSuccess,logout } from "../../context/authContext/AuthActions";
import { BACKEND_BASE_URL } from "../../config";
const URL = BACKEND_BASE_URL;

export const login = async(user,dispatch)=>{
    try{
        dispatch(loginStart());
        const response = await axios.post(`${URL}/login`,user);
        response.data.isAdmin && dispatch(loginSuccess(response.data));
        return response.data;
    }catch(err){
        dispatch(loginFailure());
    }
}

export const logoutUser = (dispatch)=>{
    dispatch(logout());
}