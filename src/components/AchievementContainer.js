import ContainerComponent from "./ContainerComponent";
import styles from "./AchievementContainer.module.css";
const AchievementContainer = () => {
  return (
    <div className={styles.achievements}>
      <div className={styles.achievementsWrapper}>
        <div className={styles.achievements1}>Achievements</div>
      </div>
      <div className={styles.achievementsInner}>
        <div className={styles.frameParent}>
          <ContainerComponent />
          <ContainerComponent />
        </div>
      </div>
    </div>
  );
};

export default AchievementContainer;
