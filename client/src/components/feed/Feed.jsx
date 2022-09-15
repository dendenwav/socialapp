import { useSelector } from 'react-redux';

import Share from '../share/Share';
import Post from '../post/Post';
import useStyles from './FeedStyle';
import { Paper, Typography } from '@material-ui/core';

export default function Feed({ currentId, setCurrentId }) {
    const classes = useStyles();
    const posts = useSelector((state) => state.posts);
    const user = JSON.parse(localStorage.getItem('profile'));

    return (
        <div className={classes.feedContainer}>
            <div className={classes.feedWrapper}>
                <Share currentId={currentId} setCurrentId={setCurrentId}/>

                {user ? (
                    posts.map((p) => (
                        <Post key={p._id} post={p} setCurrentId={setCurrentId} />
                    ))
                ) : (
                    <Paper className={classes.feedNotConnected} elevation={3}>
                        <Typography variant='h5'>Connecter vous pour voir les Posts de vos Amis...</Typography>
                    </Paper>
                )}
            </div>
        </div>
    )
}
