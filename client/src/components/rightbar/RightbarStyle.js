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
        fontSize: '18px',
        fontWeight: '500',
        marginBottom: '10px',
    },
    rightbarFriends: {
        padding: '0',
        margin: '0',
        listStyle: 'none',
    },
    rightbarInfo: {
        marginBottom: '30px',
    },
    rightbarInfoItem: {
        marginBottom: '10px',
    },
    rightbarInfoKey: {
        marginRight: '15px',
        fontWeight: '500',
        color: '#555',
    },
    rightbarInfoValue: {
       fontWeight: '300',
    },
    rightbarFollowings: {
       display: 'flex',
       flexWrap: 'wrap',
       justifyContent: 'space-between',
    },
    rightbarFollowing: {
       display: 'flex',
       flexDirection: 'column',
       marginBottom: '20px',
       cursor: 'pointer',
    },
    rightbarFollowingImg: {
       width: '100px',
       height: '100px',
       objectFit: 'cover',
       borderRadius: '5px',
    },
}));