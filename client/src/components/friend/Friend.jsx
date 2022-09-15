import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './FriendStyle';

export default function Friend({user}) {
    const classes = useStyles();

    return (
        <li>
            <Link to={`profile/${user._id}`} className={classes.rightbarFriend}> 
                <Avatar className={classes.rightbarFriendImg} alt={user?.username} src={user?.imageUrl}>{user?.username?.charAt(0)}</Avatar>
                <span>{user.username}</span>
            </Link>
        </li>
    )
}
