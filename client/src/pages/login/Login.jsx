import useStyles from './LoginStyle';

export default function Login() {
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
                    <input placeholder="Email" className={classes.loginInput}/>
                    <input placeholder="Password" className={classes.loginInput}/>
                    <button className={classes.loginButton}>Log In</button>
                    <span className={classes.loginForgot}>Forgot Password?</span>
                    <button className={classes.loginRegisterButton}>Create a New Account</button>
                </div>
                </div>
            </div>
        </div>
    )
}
