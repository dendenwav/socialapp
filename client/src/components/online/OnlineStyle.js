import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({    
    rightbarFriend: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '15px',
    },
    rightbarProfileContainer: {
        marginRight: '10px',
        position: 'relative',
    },
    rightbarProfileImg: {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        objectFit: 'cover',
    },
    rightbarOnline: {
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        backgroundColor: 'limegreen',
        position: 'absolute',
        top: '-2px',
        right: '-4px',
        border: '2px solid white',
    },
    rightbarProfileName: {
        fontWeight: '500',
    },
}));