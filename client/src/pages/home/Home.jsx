import useStyles from './HomeStyle';
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

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
