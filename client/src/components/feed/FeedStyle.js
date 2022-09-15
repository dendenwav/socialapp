import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    feedContainer: {
        flex: 5.5,
        height: 'calc(100vh - 50px)',
    },
    feedNotConnected: {
        borderRadius: '10px',
        boxShadow: '0 6px 14px 0 rgba(0, 0, 0, 0.06)',
        margin: '20px',
        padding: '20px',
        border: '1px solid #f0f0f0',
    },
}));