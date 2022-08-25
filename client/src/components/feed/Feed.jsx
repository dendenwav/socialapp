import Share from '../share/Share';
import Post from '../post/Post';
import useStyles from './FeedStyle';

export default function Feed() {
    const classes = useStyles();

    return (
        <div className={classes.feedContainer}>
            <div className={classes.feedWrapper}>
                <Share/>
                <Post/>
            </div>
        </div>
    )
}
