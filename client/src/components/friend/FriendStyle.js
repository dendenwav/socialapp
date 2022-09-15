import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    rightbarFriend: {
        textDecoration: 'none',
        color: 'black',
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px',
    },
    rightbarFriendImg: {
        borderRadius: '50%',
        objectFit: 'cover',
        marginRight: '10px',
    },
}));