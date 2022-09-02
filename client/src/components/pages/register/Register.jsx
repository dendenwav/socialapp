import useStyles from './RegisterStyle';

export default function Register() {
    const classes = useStyles();

    return (
        <div className={classes.loginContainer}>
            <div className={classes.loginWrapper}>
                <div className={classes.loginLeft}>
                <h3 className={classes.loginLogo}>SocialApp</h3>
                <span className={classes.loginDesc}>
                    Connect with friends and the world around you on SocialApp.
                </span>
                </div>
                <div className={classes.loginRight}>
                <div className={classes.loginBox}>
                    <input placeholder="Username" className={classes.loginInput}/>
                    <input placeholder="Email" className={classes.loginInput}/>
                    <input placeholder="Password" className={classes.loginInput}/>
                    <input placeholder="Password Again" className={classes.loginInput}/>
                    <button className={classes.loginButton}>Sign up</button>
                    <button className={classes.loginRegisterButton}>Log into Account</button>
                </div>
                </div>
            </div>
        </div>
    )
}
