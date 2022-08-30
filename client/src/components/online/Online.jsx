import useStyles from './OnlineStyle';

export default function Online({user}) {
    const classes = useStyles();

    return (
        <li className={classes.rightbarFriend}>
            <div className={classes.rightbarProfileContainer}>
                <img className={classes.rightbarProfileImg} src={user.profilePicture} alt=""/>
                <span className={classes.rightbarOnline}></span>
            </div>
            <span className={classes.rightbarProfileName}>{user.username}</span>
        </li>
    )
}
