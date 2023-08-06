import styles from "./RoboticsClubContainer.module.css";
const RoboticsClubContainer = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.homePageInner}>
        <div className={styles.removal2Parent}>
          <img className={styles.removal2Icon} alt="" src="/removal-2@2x.png" />
          <div className={styles.links}>
            <div className={styles.home}>Home</div>
            <div className={styles.aboutUs}>About Us</div>
            <div className={styles.events}>Events</div>
            <div className={styles.events}>Projects</div>
            <div className={styles.contactUs}>Contact Us</div>
          </div>
          <div className={styles.button}>
            <div className={styles.register}>Register</div>
          </div>
        </div>
      </div>
      <div className={styles.welcomeText}>
        <div className={styles.roboticsClub}>ROBOTICS CLUB</div>
        <div className={styles.manitBhopal}>MANIT BHOPAL</div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.instanceChild} />
        <img className={styles.arrow1Icon} alt="" src="/arrow-1@2x.png" />
      </div>
    </div>
  );
};

export default RoboticsClubContainer;
