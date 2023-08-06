import styles from "./AboutUsContainer.module.css";
const AboutUsContainer = () => {
  return (
    <div className={styles.aboutUs}>
      <div className={styles.aboutUsWrapper}>
        <div className={styles.aboutUs1}>About us</div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.httpslottiefilescom134344Parent}>
          <img
            className={styles.httpslottiefilescom134344Icon}
            alt=""
            src="/httpslottiefilescom134344robot@2x.png"
          />
          <div
            className={styles.loremIpsumDolor}
          >{`Lorem ipsum dolor sit amet consectetur. Lectus purus suspendisse vitae sociis. Vestibulum pellentesque fusce ut aliquet sed ipsum fermentum nunc. A velit tempus velit nibh in nisi tincidunt vel. Ut dolor enim at risus. Auctor habitant odio volutpat scelerisque phasellus ornare non. Pellentesque dolor eget suspendisse blandit volutpat sem nisl arcu. A erat etiam vitae egestas ut eu elementum senectus vitae. Feugiat netus nunc duis est. Ac neque massa adipiscing lacus. Turpis sit nec eu justo consequate. `}</div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsContainer;
