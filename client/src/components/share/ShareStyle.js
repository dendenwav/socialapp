import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    shareContainer: {
        borderRadius: '10px',
        boxShadow: '0 6px 14px 0 rgba(0, 0, 0, 0.06)',
        margin: '20px',
        border: '1px solid #f0f0f0',
    },
    shareWrapper: {
        padding: '20px',
    },
    shareHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 10px',
    },
    shareProfileImg: {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        marginRight: '10px',
        objectFit: 'cover',
    },
    shareInput: {
        border: 'none',
        width: '100%',
        "&:focus": {
            outline: 'none',
        }
    },
    shareDivider: {
        margin: '20px 0'
    },
    shareFooter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 10px',
    },
    shareOptions: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    shareOption: {
        display: 'flex',
        alignItems: 'center',
        marginRight: '30px',
        cursor: 'pointer',
    },
    shareIcon: {
        fontSize: '18px !important',
        marginRight: '5px',
    },
    shareOptionText: {
        fontSize: '14px',
        fontWeight: '500',
        whiteSpace: 'nowrap',
    },
    shareButton: {
        border: 'none',
        textTransform: 'uppercase',
        padding: '7px',
        borderRadius: '5px',
        backgroundColor: '#f1c40f',
        fontSize: '14px',
        fontWeight: '900',
        cursor: 'pointer',
        color: '#fff',
    },
    fileInput: {
        display: 'none',
    },
    fileButton: {
        textTransform: 'none',
    }
}));