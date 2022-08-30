import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    sidebarFriendListItem: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px',
    },
    sidebarFriendImg: {
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        objectFit: 'cover',
        marginRight: '10px',
    },
}));