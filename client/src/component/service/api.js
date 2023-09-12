import axios from "axios";
import { BACKEND_BASE_URL } from "../../config";
const URL=BACKEND_BASE_URL;

export const getRandomMoviesList = async(type,genre)=>{
    try{
        const response = await axios.get(`${URL}/lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,
        {
            headers:{
                    authorization: "Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken,
        }}
        );
        return response.data;
    }catch(err){
        console.log("Error while calling getRandomMoviesList api",err);
    }
}

export const getMovie = async(id)=>{
    try{
        const response = await axios.get(`${URL}/movie/find/${id}`,
        {headers:{ authorization: "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken}}
        );
        return response.data;
    }catch(err){
        console.log("Error while calling getMovie api",err);
    }
}

export const getRandomFeaturedMovie = async(type)=>{
    try{
        const response = await axios.get(`${URL}/random/find?type=${type}`,
        {headers:{ authorization: "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken}});
        return response.data[0];
    }catch(err){
        console.log("Error while calling getRandomFeaturedMovie api",err);
    }
}