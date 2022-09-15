import { FavoriteRounded, FavoriteBorderRounded, MoreHoriz } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import useStyles from './PostStyle';
import { Avatar, CardMedia } from '@material-ui/core';

export default function Post({post , setCurrentId}) {
    const classes = useStyles();
    const [ like, setLike ] = useState(post?.likes.length);
    const [ isLiked, setIsLiked ] = useState(false);
    const user = JSON.parse(localStorage.getItem('profile'));
    let img = <></>;

    const likeHandler = () => {
        setLike( isLiked ? like-1 : like +1 );
        setIsLiked(!isLiked);
    };

    if (post.selectedFile)
    {
        img = <img className={classes.postImg} src={post.selectedFile} />;
    }

    return (
        <div className={classes.postContainer}>
            <div className={classes.postWrapper}>
                <div className={classes.postHeader}>
                    <div className={classes.postHeaderLeft}>    
                        <Link to={`profile/${post.userId}`} className={classes.profileLink}>                    
                            <Avatar className={classes.postProfileImg} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.username.charAt(0)}</Avatar>
                        </Link>
                        <span className={classes.postProfileName}>{post.username}</span>
                        <span className={classes.postTimestamp}>{post.createdAt}</span>
                    </div>
                    <div className={classes.postHeaderRight}>
                        <MoreHoriz/>
                    </div>
                </div>
                <div className={classes.postBody}>
                    <span className={classes.postText}>{post?.message}</span>
                    {img}
                </div>
                <div className={classes.postFooter}>
                    <div className={classes.postFooterLeft}>
                        {isLiked ? (
                            <FavoriteRounded onClick={likeHandler} className={classes.heartIcon}/>
                        ) : (
                            <FavoriteBorderRounded onClick={likeHandler} className={classes.heartIcon}/>
                        )}                        
                        <span className={classes.likeCount}>{like} Likes</span>
                    </div>
                    <div className={classes.postFooterRight}>
                        <span className={classes.commentCount}>{post.comment}... Comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
