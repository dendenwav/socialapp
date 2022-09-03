import useStyles from './RightbarStyle';
import { Users } from '../../dummyData';
import Online from '../online/Online';

export default function Rightbar({profile}) {
    const classes = useStyles();
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const HomeRightbar = () => {
        return (
          <>
            <div className={classes.birthdayContainer}>
                <img className={classes.birthdayImg} src={PF + "gift.png"} alt="" />
                <span className={classes.birthdayText}>
                    <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
                </span>
            </div>
            <img className={classes.rightbarAd} src={PF + "ad.png"} alt=""/>
            <h4 className={classes.rightbarTitle}>Online Friends</h4>
            <ul className={classes.rightbarFriends}>
                {
                    Users.map(u => (
                        <Online key={u.id} user={u}/>
                    ))
                }
            </ul>
          </>
        );
      };
    
      const ProfileRightbar = () => {
        return (
          <>
            <h4 className={classes.rightbarTitle}>User information</h4>
            <div className={classes.rightbarInfo}>
              <div className={classes.rightbarInfoItem}>
                <span className={classes.rightbarKey}>City:</span>
                <span className={classes.rightbarInfoValue}>New York</span>
              </div>
              <div className={classes.rightbarInfoItem}>
                <span className={classes.rightbarKey}>From:</span>
                <span className={classes.rightbarInfoValue}>Madrid</span>
              </div>
              <div className={classes.rightbarInfoItem}>
                <span className={classes.rightbarKey}>Relationship:</span>
                <span className={classes.rightbarInfoValue}>Single</span>
              </div>
            </div>
            <h4 className={classes.rightbarTitle}>User friends</h4>
            <div className={classes.rightbarFollowings}>
              <div className={classes.rightbarFollowing}>
                <img src={PF + "person/1.jpeg"} alt="" className={classes.rightbarFollowingImg}/>
                <span className={classes.rightbarFollowingName}>John Carter</span>
              </div>
              <div className={classes.rightbarFollowing}>
                <img src={PF + "person/1.jpeg"} alt="" className={classes.rightbarFollowingImg}/>
                <span className={classes.rightbarFollowingName}>John Carter</span>
              </div>
              <div className={classes.rightbarFollowing}>
                <img src={PF + "person/1.jpeg"} alt="" className={classes.rightbarFollowingImg}/>
                <span className={classes.rightbarFollowingName}>John Carter</span>
              </div>
              <div className={classes.rightbarFollowing}>
                <img src={PF + "person/1.jpeg"} alt="" className={classes.rightbarFollowingImg}/>
                <span className={classes.rightbarFollowingName}>John Carter</span>
              </div>
            </div>
          </>
        );
      };
      return (
        <div className={classes.rightbarContainer}>
          <div className={classes.rightbarWrapper}>
            {profile ? <ProfileRightbar /> : <HomeRightbar />}
          </div>
        </div>
      );
}
