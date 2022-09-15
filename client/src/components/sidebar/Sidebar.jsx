import { Bookmark, Chat, Event, Group, HelpOutline, PlayCircleFilledOutlined, RssFeed, School, WorkOutline } from '@material-ui/icons';
import Friend from '../friend/Friend';
import useStyles from './SidebarStyle';

export default function Sidebar() {
    const classes = useStyles();

    return (
        <div className={classes.sidebarContainer}>
            <div className={classes.sidebarWrapper}>
                <ul className={classes.sidebarList}>
                    <li className={classes.sidebarListItem}>
                        <RssFeed className={classes.sidebarListItemIcon}/>
                        <span className={classes.sidebarListItemText}>Feed</span>
                    </li>
                    <li className={classes.sidebarListItem}>
                        <Chat className={classes.sidebarListItemIcon}/>
                        <span className={classes.sidebarListItemText}>Chats</span>
                    </li>
                    <li className={classes.sidebarListItem}>
                        <PlayCircleFilledOutlined className={classes.sidebarListItemIcon}/>
                        <span className={classes.sidebarListItemText}>Videos</span>
                    </li>
                    <li className={classes.sidebarListItem}>
                        <Group className={classes.sidebarListItemIcon}/>
                        <span className={classes.sidebarListItemText}>Groups</span>
                    </li>
                    <li className={classes.sidebarListItem}>
                        <Bookmark className={classes.sidebarListItemIcon}/>
                        <span className={classes.sidebarListItemText}>Bookmarks</span>
                    </li>
                    <li className={classes.sidebarListItem}>
                        <HelpOutline className={classes.sidebarListItemIcon}/>
                        <span className={classes.sidebarListItemText}>Questions</span>
                    </li>
                    <li className={classes.sidebarListItem}>
                        <WorkOutline className={classes.sidebarListItemIcon}/>
                        <span className={classes.sidebarListItemText}>Jobs</span>
                    </li>
                    <li className={classes.sidebarListItem}>
                        <Event className={classes.sidebarListItemIcon}/>
                        <span className={classes.sidebarListItemText}>Events</span>
                    </li>
                    <li className={classes.sidebarListItem}>
                        <School className={classes.sidebarListItemIcon}/>
                        <span className={classes.sidebarListItemText}>Courses</span>
                    </li>
                </ul>

                <button className={classes.sidebarButton}>Show More...</button>
                <hr className={classes.sidebarDivider}/>

                <ul className={classes.sidebarFriendList}>
                    {
                        // Users.map(u => (
                        //     <Friend key={u.id} user={u}/>
                        // ))
                    }
                </ul>
            </div>
        </div>
    )
}
