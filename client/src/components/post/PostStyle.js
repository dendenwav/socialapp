import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    postContainer: {
        borderRadius: '10px',
        boxShadow: '0 6px 14px 0 rgba(0, 0, 0, 0.06)',
        margin: '20px',
        border: '1px solid #f0f0f0',
    },
    postWrapper: {
        padding: '20px',
    },
    postHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 10px',
    },
    postProfileImg: {
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        marginRight: '10px',
        objectFit: 'cover',
    },
    postHeaderLeft: {
        display: 'flex',
        alignItems: 'center',
    },
    postProfileName: {
        fontSize: '15px',
        fontWeight: 'bold',
        whiteSpace: 'nowrap',
        marginRight: '10px',
    },
    postTimestamp: {
        fontSize: '12px',
    },
    postBody: {
        marginTop: '20px',
    },
    postImg: {
        marginTop: '20px',
        width: '100%',
        maxHeight: '600px',
        objectFit: 'contain',
    },
    postFooter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    postFooterLeft: {
        display: 'flex',
        alignItems: 'center',
    },
    heartIcon: {
        width: '24px',
        height: '24px',
        marginRight: '5px',
        cursor: 'pointer',
    },
    likeCount: {
        fontSize: '15px',
    },
    commentCount: {
        fontSize: '15px',
        cursor: 'pointer',
    }
}));