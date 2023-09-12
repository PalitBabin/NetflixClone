import MovieReducer from "./MovieReducer";
import {createContext, useReducer} from "react";
import PropTypes from "prop-types";


const INITIAL_STATE = {
    movies: [],
    isFeteching: false,
    error: false
};


export const MovieContext = createContext(INITIAL_STATE);

const MovieProvider = ({children})=>{

    const [state,dispatch] = useReducer(MovieReducer,INITIAL_STATE);

    return (
        <MovieContext.Provider value={{
            movies:state.movies,
            isFeteching:state.isFeteching,
            error:state.error,
            dispatch
            
        }}>
            {children}
        </MovieContext.Provider>
    )
}

MovieProvider.propTypes={
    children:PropTypes.node
};
export default MovieProvider;