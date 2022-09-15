import * as api from '../api/api';
import { FETCH, UPDATE_USER, DELETE_USER, FETCH_ALL_USERS } from '../constants/actionTypes';


export const getUsers = () => async (dispatch) => {
    try {
        const { data } = await api.getUsers();

        dispatch({ type: FETCH_ALL_USERS, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const getUser = (userId) => async (dispatch) => {
    try {
        const { data } = await api.getUser(userId);

        dispatch({ type: FETCH, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const updateUser = (id, updatedUser) => async (dispatch) => {
    try {
        const { data } = await api.updateUser(id, updatedUser);

        dispatch({ type: UPDATE_USER, payload: data });
    } catch (error) {
        console.log(error);
    }
}
export const deleteUser = (id) => async (dispatch) => {
    try {
        const { data } = await api.deleteUser(id);

        dispatch({ type: DELETE_USER, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const followUser = (id) => async (dispatch) => {
    try {
        const { data } = await api.followUser(id);

        dispatch({ type: UPDATE_USER, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const unfollowUser = (id) => async (dispatch) => {
    try {
        const { data } = await api.unfollowUser(id);

        dispatch({ type: UPDATE_USER, payload: data });
    } catch (error) {
        console.log(error);
    }
}