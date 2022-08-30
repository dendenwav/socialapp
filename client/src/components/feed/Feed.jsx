import Share from '../share/Share';
import Post from '../post/Post';
import useStyles from './FeedStyle';
import { Posts } from '../../dummyData';

export default function Feed() {
    const classes = useStyles();

    return (
        <div className={classes.feedContainer}>
            <div className={classes.feedWrapper}>
                <Share/>
                {
                    Posts.map((p) => (
                        <Post key={p.id} post={p}/>
                    ))
                }
            </div>
        </div>
    )
}
