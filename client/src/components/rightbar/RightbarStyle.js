import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    rightbarContainer: {
        flex: 3.5,
        height: 'calc(100vh - 50px)',
    },    
    rightbarWrapper: {
        padding: '20px',
    },
    birthdayContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    birthdayImg: {
        width: '40px',
        height: '40px',
        marginRight: '10px'
    },
    birthdayText: {
        fontWeight: '300',
        fontSize: '15px'
    },
    rightbarAd: {
        width: '100%',
        borderRadius: '10px',
        margin: '30px 0',
    },
    rightbarTitle: {
        marginBottom: '20px',
    },
    rightbarFriends: {
        padding: '0',
        margin: '0',
        listStyle: 'none',
    },
}));