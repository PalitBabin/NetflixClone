import ListReducer from "./ListReducer";
import {createContext, useReducer} from "react";
import PropTypes from "prop-types";


const INITIAL_STATE = {
    lists: [],
    isFeteching: false,
    error: false
};


export const ListContext = createContext(INITIAL_STATE);

const ListProvider = ({children})=>{

    const [state,dispatch] = useReducer(ListReducer,INITIAL_STATE);

    return (
        <ListContext.Provider value={{
            lists:state.lists,
            isFeteching:state.isFeteching,
            error:state.error,
            dispatch
            
        }}>
            {children}
        </ListContext.Provider>
    )
}

ListProvider.propTypes={
    children:PropTypes.node
};
export default ListProvider;