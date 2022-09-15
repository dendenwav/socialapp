import React, { useEffect, useRef } from "react";
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import useStyles from './HomeStyle';
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { getFriendsPosts } from "../../actions/posts";
import { getUsers } from "../../actions/users";

export default function Home({ currentId, setCurrentId }) {
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'));
    console.log(user?.result?.username);
    const dispatch = useDispatch();
    const firstRender = useRef(true);

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            
            if (!user)
            {
                toast.warn('Hey, Connecte-toi pour utilisé Plugger', {
                    position: "bottom-right",
                    autoClose: 10000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: false,
                    progress: undefined,
                });
            }
        }

        if (user)
        {
            dispatch(getFriendsPosts(user?.result?._id));
            dispatch(getUsers());
        }
    }, [currentId, dispatch, user]);

    return (
        <div className={classes.homeContainer}>   
            <ToastContainer/>
            <Sidebar/>
            <Feed currentId={currentId} setCurrentId={setCurrentId}/>
            <Rightbar/>
        </div>
    )
}