import axios from "axios";
import { BACKEND_BASE_URL } from "../../config";

const URL = BACKEND_BASE_URL;
const token = "";


export const getUsersStats = async()=>{
    try{
        const response = await axios.get(`${URL}/stats`);
        return response.data;
    }catch(err){
        console.log("Error while calling getUsersStats api",err);
    }
}

export const getNewUsers = async()=>{
    try{
        const response = await axios.get(`${URL}/users?new=true`,{headers:{ authorization: `Bearer ${token}`}});
        return response.data;
    }catch(err){
        console.log("Error while calling getUsersStats api",err);
    }
}

