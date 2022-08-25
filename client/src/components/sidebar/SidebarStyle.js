import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    sidebarContainer: {
        flex: 3,
        height: 'calc(100vh - 50px)',
        overflowY: 'auto',
        "&::-webkit-scrollbar": {
            width: '7px',
        },
        "&::-webkit-scrollbar-thumb": {
            backgroundColor: '#d6d6d6',
            borderRadius: '10px',
            width: '2px',
        },
    },
    sidebarWrapper: {
        padding: '20px',
    },
    sidebarList: {
        padding: 0,
        margin: 0,
        listStyle: 'none',
    },
    sidebarListItem: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px',
    },
    sidebarListItemIcon: {
        marginRight: '10px',
    },
    sidebarButton: {
        width: '150px',
        border: 'none',
        padding: '10px',
        borderRadius: '5px',
        fontWeight: '500',
    },
    sidebarDivider: {
        margin: '20px 0',
    },
    sidebarFriendList: {
        margin: '0',
        padding: '0',
        listStyle: 'none',
    },
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