import axios from "axios";
import { createListFailure, createListStart, createListSuccess, deleteListFailure, deleteListStart, deleteListSuccess, getListsFailure, getListsStart, getListsSuccess } from "./ListActions";
import { BACKEND_BASE_URL } from "../../config";

const URL = BACKEND_BASE_URL;
const token= JSON.parse(localStorage.getItem("user")).accessToken;

//GET LISTS
export const getLists = async (dispatch) => {
    try {
        dispatch(getListsStart());
        const response = await axios.get(`${URL}/lists`, { headers: { authorization: `Bearer ${token}` } });
        dispatch(getListsSuccess(response.data));
    } catch (err) {
        dispatch(getListsFailure());
    }
}
//CREATE MOVIE
export const createList = async (list, dispatch) => {
    dispatch(createListStart());
    try {
        const response = await axios.post(`${URL}/list/create`, list, { headers: { authorization: `Bearer ${token}` } });
        dispatch(createListSuccess(response.data));
    } catch (err) {
        dispatch(createListFailure());
    }
};
//DELETE LISTS
export const deleteList = async (id, dispatch) => {
    try {
        dispatch(deleteListStart());
        await axios.delete(`${URL}/list/delete/${id}`, { headers: { authorization: `Bearer ${token}` } });
        dispatch(deleteListSuccess(id));
    } catch (err) {
        dispatch(deleteListFailure());
    }
}