import RoboticsClubContainer from "../components/RoboticsClubContainer";
import AboutUsContainer from "../components/AboutUsContainer";
import EventsContainer from "../components/EventsContainer";
import ProjectsContainer from "../components/ProjectsContainer";
import AchievementContainer from "../components/AchievementContainer";
import SponsorsSection from "../components/SponsorsSection";
import ContactFormContainer from "../components/ContactFormContainer";
import styles from "./Robo.module.css";
const Robo = () => {
  return (
    <div className={styles.robo}>
      <div className={styles.homeScreen} />
      <div className={styles.homePageParent}>
        <RoboticsClubContainer />
        <AboutUsContainer />
        <EventsContainer />
        <ProjectsContainer />
        <AchievementContainer />
        <div className={styles.frameParent}>
          <div className={styles.ourTeamWrapper}>
            <div className={styles.ourTeam}>our team</div>
          </div>
          <div className={styles.frameChild} />
        </div>
        <SponsorsSection />
        <ContactFormContainer />
      </div>
    </div>
  );
};

export default Robo;
