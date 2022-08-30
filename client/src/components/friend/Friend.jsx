import useStyles from './FriendStyle';

export default function Friend({user}) {
    const classes = useStyles();

    return (
        <li className={classes.sidebarFriendListItem}>
            <img src={user.profilePicture} alt="" className={classes.sidebarFriendImg}/>
            <span className={classes.sidebarFriendName}>{user.username}</span>
        </li>
    )
}
