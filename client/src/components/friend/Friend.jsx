import useStyles from './FriendStyle';

export default function Friend({user}) {
    const classes = useStyles();
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <li className={classes.sidebarFriendListItem}>
            <img src={PF + user.profilePicture} alt="" className={classes.sidebarFriendImg}/>
            <span className={classes.sidebarFriendName}>{user.username}</span>
        </li>
    )
}
