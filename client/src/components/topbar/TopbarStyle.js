import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    topbarContainer: {
        height: '50px',
        width: '100%',
        backgroundColor: '#ff355e',
        display: 'flex',
        alignItems: 'center',
        position: 'sticky',
        top: '0',
        zIndex: '999',
    },
    topbarLeft: {
        flex: '3',
    },
    topbarCenter: {
        flex: '5',
    },
    topbarRight: {
        flex: '4',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        color: '#fff',
    },
    topbarImg: {
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        objectFit: 'cover',
        cursor: 'pointer',
    },
    logo: {
        fontSize: '24px',
        marginLeft: '20px',
        fontWeight: 'bold',
        color: '#ffffff',
        cursor: 'pointer',
    },
    searchbar: {
        width: '100%',
        height: '30px',
        backgroundColor: '#ffffff',
        borderRadius: '30px',
        display: 'flex',
        alignItems: 'center',
    },
    searchIcon: {
        fontSize: '20px !important',
        marginLeft: '10px',
        marginRight: '5px',
        color: '#ff355e',// #ffd800 for yellow
    },
    searchInput: {
        border: 'none',
        width: 'calc(100% - 50px)',
        "&:focus": {
            outline: 'none',
        }
    },
    topbarLink: {
        marginRight: '10px',
        fontSize: '14px',
        cursor: 'pointer',
    },
    topbarIcons: {
        display: 'flex',
    },
    topbarIconItem: {
        marginRight: '15px',
        cursor: 'pointer',
        position: 'relative',
    },
    topbarIconBadge: {
        width: '15px',
        height: '15px',
        backgroundColor: '#F6BE00',
        color: '#fff',
        borderRadius: '50%',
        position: 'absolute',
        top: '-5px',
        right: '-8px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '12px',
    },
}));