import useStyles from './OnlineStyle';

export default function Online({user}) {
    const classes = useStyles();
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <li className={classes.rightbarFriend}>
            <div className={classes.rightbarProfileContainer}>
                <img className={classes.rightbarProfileImg} src={PF + user.profilePicture} alt=""/>
                <span className={classes.rightbarOnline}></span>
            </div>
            <span className={classes.rightbarProfileName}>{user.username}</span>
        </li>
    )
}
