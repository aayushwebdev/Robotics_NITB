import styles from "./SponsorsSection.module.css";
const SponsorsSection = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameWrapper}>
        <div className={styles.sponsorsWrapper}>
          <div className={styles.sponsors}>Sponsors</div>
        </div>
      </div>
      <div className={styles.sponsorsLogoWrapper}>
        <div className={styles.sponsorsLogo}>
          <img className={styles.logo1Icon} alt="" src="/logo-1@2x.png" />
          <img className={styles.logo2Icon} alt="" src="/logo-2@2x.png" />
          <img className={styles.logo3Icon} alt="" src="/logo-3@2x.png" />
          <img className={styles.logo4Icon} alt="" src="/logo-4@2x.png" />
          <img className={styles.logo5Icon} alt="" src="/logo-5@2x.png" />
          <img className={styles.logo6Icon} alt="" src="/logo-6@2x.png" />
          <img className={styles.logo7Icon} alt="" src="/logo-7@2x.png" />
          <img className={styles.logo8Icon} alt="" src="/logo-8@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default SponsorsSection;
