import { MoreHoriz } from '@material-ui/icons';
import useStyles from './PostStyle';

export default function Post() {
    const classes = useStyles();

    return (
        <div className={classes.postContainer}>
            <div className={classes.postWrapper}>
                <div className={classes.postHeader}>
                    <div className={classes.postHeaderLeft}>                        
                        <img src="/assets/person/1.jpeg" alt="" className={classes.postProfileImg}/>
                        <span className={classes.postProfileName}>John Doe</span>
                        <span className={classes.postTimestamp}>2 hours ago</span>
                    </div>
                    <div className={classes.postHeaderRight}>
                        <MoreHoriz/>
                    </div>
                </div>
                <div className={classes.postBody}>
                    <span className={classes.postText}>Hey! C'est mon premier post! </span>
                    <img src="/assets/post/1.jpeg" alt="" className={classes.postImg}/>
                </div>
                <div className={classes.postFooter}>
                    <div className={classes.postFooterLeft}>
                        <img src="/assets/heart.png" alt="" className={classes.heartIcon}/>
                        <span className={classes.likeCount}>12 Likes</span>
                    </div>
                    <div className={classes.postFooterRight}>
                        <span className={classes.commentCount}>2 Comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
