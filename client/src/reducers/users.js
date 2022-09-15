import { FETCH, UPDATE_USER, DELETE_USER, FETCH_ALL_USERS } from '../constants/actionTypes';

const usersReducer = (users = [], action) => {
    switch (action.type) {
        case FETCH_ALL_USERS:
            return action.payload;   
        case UPDATE_USER:
            return users.map((user) => user._id === action.payload._id ? action.payload : user);    
        case DELETE_USER:
            return users.filter((user) => user._id !== action.payload);
        default:
            return users; 
    }
}

export default usersReducer;