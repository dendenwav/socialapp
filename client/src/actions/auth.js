import * as api from '../api/api';
import { AUTH } from '../constants/actionTypes';


export const registerUser = (newUser, navigate) => async (dispatch) => {
    try {        
        console.log(newUser);
        const { data } = await api.registerUser(newUser);
        console.log(data);

        dispatch({ type: AUTH, data });
        
        navigate('/');
    } catch (error) {
        console.log(error);
    }
}

export const loginUser = (existingUser, navigate) => async (dispatch) => {
    try {
        console.log(existingUser);
        const { data } = await api.loginUser(existingUser);

        dispatch({ type: AUTH, data });

        navigate('/');
    } catch (error) {
        console.log(error);
    }
}