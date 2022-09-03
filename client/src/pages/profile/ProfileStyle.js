import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    profileContainer: {
        display: 'flex',
    },
    profileRight: {
        flex: '9',
    },
    profileCover: {
        height: '320px',
        position: 'relative',
    },
    profileCoverImg: {
        width: '100%',
        height: '250px',
        objectFit: 'cover',
    },
    profileUserImg: {
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        objectFit: 'cover',
        position: 'absolute',
        left: '0',
        right: '0',
        margin: 'auto',
        top: '150px',
        border: '3px solid #fff'
    },
    profileInfo: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileInfoName: {
        fontSize: '24px',
    },
    profileInfoDesc: {
        fontWeight: '300',
    },
    profileRightBody: {
        display: 'flex',
    }
}));