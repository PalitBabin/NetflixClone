import AuthReducer from "./AuthReducer";
import {createContext, useEffect, useReducer} from "react";
import PropTypes from "prop-types";

const storedUser = localStorage.getItem("user");
const INITIAL_STATE = {
    user: storedUser ? JSON.parse(storedUser) : null,
    isFeteching: false,
    error: false
};


export const AuthContext = createContext(INITIAL_STATE);

const AuthProvider = ({children})=>{

    const [state,dispatch] = useReducer(AuthReducer,INITIAL_STATE);

 

    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(state.user));
    },[state.user]);

    return (
        <AuthContext.Provider value={{
            user:state.user,
            isFeteching:state.isFeteching,
            error:state.error,
            dispatch
            
        }}>
            {children}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes={
    children:PropTypes.node
};
export default AuthProvider;