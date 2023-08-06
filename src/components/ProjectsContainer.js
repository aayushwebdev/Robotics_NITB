import styles from "./ProjectsContainer.module.css";
const ProjectsContainer = () => {
  return (
    <div className={styles.projetcs}>
      <div className={styles.projectsWrapper}>
        <div className={styles.projects}>Projects</div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.vectorParent}>
              <img className={styles.frameItem} alt="" src="/vector-41.svg" />
              <div className={styles.projectName}>Project name</div>
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.vectorParent}>
              <img className={styles.frameItem} alt="" src="/vector-42.svg" />
              <div className={styles.projectName}>Project name</div>
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.vectorParent}>
              <img className={styles.frameItem} alt="" src="/vector-43.svg" />
              <div className={styles.projectName}>Project name</div>
            </div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameDiv}>
            <div className={styles.frameChild2} />
            <div className={styles.vectorParent1}>
              <img className={styles.frameChild3} alt="" src="/vector-44.svg" />
              <div className={styles.projectName3}>Project name</div>
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild2} />
            <div className={styles.vectorParent2}>
              <img className={styles.frameChild5} alt="" src="/vector-45.svg" />
              <div className={styles.projectName4}>Project name</div>
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild6} />
            <div className={styles.vectorParent2}>
              <img className={styles.frameChild5} alt="" src="/vector-45.svg" />
              <div className={styles.projectName4}>Project name</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsContainer;
