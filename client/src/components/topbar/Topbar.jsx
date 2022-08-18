import { Chat, Notifications, Person, Search } from '@material-ui/icons';

import useStyles from './TopbarStyle';

export default function Topbar() {
    const classes = useStyles();

    return (
        <div className={classes.topbarContainer}>
            <div className={classes.topbarLeft}>
                <span className={classes.logo}>SocialApp</span>
            </div>
            <div className={classes.topbarCenter}>
                <div className={classes.searchbar}>
                    <Search className={classes.searchIcon}/>
                    <input placeholder='Search...' className={classes.searchInput} />
                </div>
            </div>
            <div className={classes.topbarRight}>
                <div className={classes.topbarLinks}>
                    <span className={classes.topbarLink}>Homepage</span>
                    <span className={classes.topbarLink}>Timeline</span>
                </div>
                <div className={classes.topbarIcons}>
                    <div className={classes.topbarIconItem}>
                        <Person/>
                        <span className={classes.topbarIconBadge}>1</span>
                    </div>
                    <div className={classes.topbarIconItem}>
                        <Chat/>
                        <span className={classes.topbarIconBadge}>2</span>
                    </div>
                    <div className={classes.topbarIconItem}>
                        <Notifications/>
                        <span className={classes.topbarIconBadge}>2</span>
                    </div>
                </div>
                <img src="/assets/person/1.jpeg" alt="" className={classes.topbarImg} />
            </div>
        </div>
    )
}
