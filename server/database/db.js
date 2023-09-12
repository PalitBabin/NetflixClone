import mongoose from "mongoose";


const Connection = async(username,password)=>{
    try{
        await mongoose.connect(`mongodb+srv://${username}:${password}@mernnetflixclone.aj9yntz.mongodb.net/?retryWrites=true&w=majority`);
        console.log("Database successfully connected!"); 
    }catch(error){
        console.log("Failed to connect with the database.");
    }
}

export default Connection;