import axios from 'axios';

// const API = axios.create({ baseURL: 'http://localhost:5000'});
const API = axios.create({ baseURL: 'https://eighty-candles-attend-88-121-98-141.loca.lt'});

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });
  
// posts
export const fetchUserPosts = (username) => API.get(`/posts/user/${username}`);
export const fetchFriendsPosts = (username) => API.get(`/posts/friends/${username}`);
export const createPost = (newPost) => API.post('/posts', newPost);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

// users
export const getUser = (id) => API.get(`/users/${id}`);
export const getUsers = () => API.get('/users/');
export const updateUser = (id, updatedUser) => API.patch(`/users/${id}`, updatedUser);
export const deleteUser = (id) => API.delete(`/users/${id}`);
export const followUser = (id) => API.put(`/users/${id}/follow`);
export const unfollowUser = (id) => API.put(`/users/${id}/unfollow`);

// auth
export const registerUser = (newUser) => API.post('/auth/register', newUser);
export const loginUser = (existingUser) => API.post('/auth/login', existingUser);