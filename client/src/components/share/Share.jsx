import { EmojiEmotions, Label, PermMedia, Room } from '@material-ui/icons';
import useStyles from './ShareStyle';

export default function Share() {
    const classes = useStyles();

    return (
        <div className={classes.shareContainer}>
            <div className={classes.shareWrapper}>
                <div className={classes.shareHeader}>
                    <img src="/assets/person/1.jpeg" alt="" className={classes.shareProfileImg}/>
                    <input placeholder="What's on your mind ?" className={classes.shareInput}/>
                </div>
                <hr className={classes.shareDivider}/>
                <div className={classes.shareFooter}>
                    <div className={classes.shareOptions}>
                        <div className={classes.shareOption}>
                            <PermMedia htmlColor='lightslategrey' className={classes.shareIcon}/>
                            <span className={classes.shareOptionText}>Photo or Video</span>
                        </div>
                        <div className={classes.shareOption}>
                            <Label htmlColor='lightslategrey' className={classes.shareIcon}/>
                            <span className={classes.shareOptionText}>Tag</span>
                        </div>
                        <div className={classes.shareOption}>
                            <Room htmlColor='lightslategrey' className={classes.shareIcon}/>
                            <span className={classes.shareOptionText}>Location</span>
                        </div>
                        <div className={classes.shareOption}>
                            <EmojiEmotions htmlColor='lightslategrey' className={classes.shareIcon}/>
                            <span className={classes.shareOptionText}>Feelings</span>
                        </div>
                    </div>
                    <button className={classes.shareButton}>Share</button>  
                </div>
            </div>
        </div>
    )
}
