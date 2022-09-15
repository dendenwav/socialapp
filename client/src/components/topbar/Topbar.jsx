import React, { useState, useEffect, useCallback } from 'react';
import { Typography, Avatar, Button } from '@material-ui/core';
import { Chat, Notifications, Person, PowerTwoTone, Search } from '@material-ui/icons';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import useStyles from './TopbarStyle';
import * as actionType from '../../constants/actionTypes';

export default function Topbar() {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const logout = useCallback(() => {
        dispatch({ type: actionType.LOGOUT });
    
        navigate('/auth');
    
        setUser(null);
    }, [dispatch, navigate]);

    useEffect(() => {
        const token = user?.token;
    
        if (token) {
          const decodedToken = decode(token);
    
          if (decodedToken.exp * 1000 < new Date().getTime()) 
            logout();
        }
        setUser(JSON.parse(localStorage.getItem('profile')));
      }, [location, logout, user?.token]);

    return (
        <div className={classes.topbarContainer}>
            <div className={classes.topbarLeft}>
                <Link to="/" className={classes.topbarHomeLink}>
                    <span className={classes.logo}>Plugger</span>
                    <PowerTwoTone className={classes.Icon}/>
                </Link>
            </div>
            <div className={classes.topbarCenter}>
                <div className={classes.searchbar}>
                    <Search className={classes.searchIcon}/>
                    <input placeholder='Search...' className={classes.searchInput} />
                </div>
            </div>
            <div className={classes.topbarRight}>
                <div className={classes.topbarLinks}>
                    <span className={classes.topbarLink}>Homepage</span>
                    <span className={classes.topbarLink}>Timeline</span>
                </div>
                <div className={classes.topbarIcons}>
                    <div className={classes.topbarIconItem}>
                        <Person/>
                        <span className={classes.topbarIconBadge}>1</span>
                    </div>
                    <div className={classes.topbarIconItem}>
                        <Chat/>
                        <span className={classes.topbarIconBadge}>2</span>
                    </div>
                    <div className={classes.topbarIconItem}>
                        <Notifications/>
                        <span className={classes.topbarIconBadge}>2</span>
                    </div>
                </div>
                {user?.result ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.username.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h6">{user?.result.username}</Typography>
                        <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                    </div>
                ) : (
                    <Button component={Link} to="/auth" variant="contained" size='small' color="primary">S'inscrire / Se Connecter</Button>
                )}
            </div>
        </div>
    )
}
