import useStyles from './ProfileStyle';
import Topbar from "../../topbar/Topbar";
import Sidebar from "../../sidebar/Sidebar";
import Feed from "../../feed/Feed";
import Rightbar from "../../rightbar/Rightbar";

export default function Profile() {
    const classes = useStyles();

    return (
        <>
            <Topbar/>
            <div className={classes.profileContainer}>                
                <Sidebar/>
                <div className={classes.profileRight}>
                    <div className={classes.profileRightHeader}>
                        <div className={classes.profileCover}>
                            <img src="assets/post/3.jpeg" alt="" className={classes.profileCoverImg}/>
                            <img src="assets/person/7.jpeg" alt="" className={classes.profileUserImg}/>
                        </div>
                        <div className={classes.profileInfo}>
                            <h4 className={classes.profileInfoName}>Jane Doe</h4>
                            <span className={classes.profileInfoDesc}>Hello this is my desc !</span>
                        </div>
                    </div>
                    <div className={classes.profileRightBody}>
                        <Feed/>
                        <Rightbar profile/>
                    </div>
                </div>
            </div>
        </>
    )
}
