import { MoreHoriz } from '@material-ui/icons';
import useStyles from './PostStyle';
import { Users } from '../../dummyData';
import { useState } from 'react';

export default function Post({post}) {
    const classes = useStyles();
    const [ like, setLike ] = useState(post.like);
    const [ isLiked, setIsLiked ] = useState(false);

    const likeHandler = () => {
        setLike( isLiked ? like-1 : like +1 );
        setIsLiked(!isLiked);
    };

    return (
        <div className={classes.postContainer}>
            <div className={classes.postWrapper}>
                <div className={classes.postHeader}>
                    <div className={classes.postHeaderLeft}>                        
                        <img src={Users.filter((u) => u.id === post.userId)[0].profilePicture} alt="" className={classes.postProfileImg}/>
                        <span className={classes.postProfileName}>{Users.filter((u) => u.id === post.userId)[0].username}</span>
                        <span className={classes.postTimestamp}>{post.date}</span>
                    </div>
                    <div className={classes.postHeaderRight}>
                        <MoreHoriz/>
                    </div>
                </div>
                <div className={classes.postBody}>
                    <span className={classes.postText}>{post?.desc}</span>
                    <img src={post.photo} alt="" className={classes.postImg}/>
                </div>
                <div className={classes.postFooter}>
                    <div className={classes.postFooterLeft}>
                        <img src="/assets/heart.png" alt="" onClick={likeHandler} className={classes.heartIcon}/>
                        <span className={classes.likeCount}>{like} Likes</span>
                    </div>
                    <div className={classes.postFooterRight}>
                        <span className={classes.commentCount}>{post.comment} Comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
