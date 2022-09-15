import useStyles from './ProfileStyle';
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
    const classes = useStyles();
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <>
            <div className={classes.profileContainer}>                
                <Sidebar/>
                <div className={classes.profileRight}>
                    <div className={classes.profileRightHeader}>
                        <div className={classes.profileCover}>
                            <img src={PF + "post/3.jpeg"} alt="" className={classes.profileCoverImg}/>
                            <img src={PF + "person/7.jpeg"} alt="" className={classes.profileUserImg}/>
                        </div>
                        <div className={classes.profileInfo}>
                            <h4 className={classes.profileInfoName}>{}</h4>
                            <span className={classes.profileInfoDesc}>{}</span>
                        </div>
                    </div>
                    <div className={classes.profileRightBody}>
                        <Feed username="jane"/>
                        <Rightbar profile/>
                    </div>
                </div>
            </div>
        </>
    )
}
