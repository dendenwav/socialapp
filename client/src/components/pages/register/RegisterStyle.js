import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    loginContainer: {
        width: '100vw',
        height: '100vh',
        backgroundColor: '#f0f2f5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginWrapper: {
        width: '70%',
        height: '70%',
        display: 'flex',
    },
    loginLeft: {
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    loginRight: {
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    loginLogo: {
        fontSize: '50px',
        fontWeight: '800',
        color: '#1775ee',
        marginBottom: '10px',
    },
    loginDesc: {
        fontSize: '24px',
    },
    loginBox: {
        height: '400px',
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    loginInput: {
        height: '50px',
        borderRadius: '10px',
        border: '1px solid gray',
        fontSize: '18px',
        paddingLeft: '20px',
        '&:focus': {
            outline: 'none',
        }
    },
    loginButton: {
        height: '50px',
        backgroundColor: '#1775ee',
        color: '#fff',
        borderRadius: '10px',
        border: 'none',
        fontSize: '20px',
        fontWeight: '500',
        cursor: 'pointer',
    },
    loginForgot: {
        textAlign: 'center',
        color: '#1775ee',
    },
    loginRegisterButton: {
        width: '60%',
        alignSelf: 'center',
        height: '50px',
        borderRadius: '10px',
        border: 'none',
        backgroundColor: '#42b72a',
        color: 'white',
        fontSize: '20px',
        fontWeight: '500',
        cursor: 'pointer',
    },
}));