import useStyles from './HomeStyle';
import Topbar from "../../topbar/Topbar";
import Sidebar from "../../sidebar/Sidebar";
import Feed from "../../feed/Feed";
import Rightbar from "../../rightbar/Rightbar";

export default function Home() {
    const classes = useStyles();

    return (
        <>
            <Topbar/>
            <div className={classes.homeContainer}>                
                <Sidebar/>
                <Feed/>
                <Rightbar/>
            </div>
        </>
    )
}
