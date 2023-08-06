import styles from "./ContainerWrapper.module.css";
const ContainerWrapper = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.vectorParent}>
          <img className={styles.frameChild} alt="" src="/vector-4.svg" />
          <div className={styles.eventName}>Event name</div>
        </div>
        <div className={styles.carousel}>
          <div className={styles.galleryPadding}>
            <div className={styles.gallery}>
              <div className={styles.imageContainer} />
              <div className={styles.imageContainer} />
              <div className={styles.imageContainer} />
            </div>
          </div>
          <div className={styles.indicators}>
            <div className={styles.indicatorsChild} />
            <div className={styles.indicatorsItem} />
            <div className={styles.indicatorsItem} />
          </div>
        </div>
      </div>
      <div className={styles.loremIpsumDolor}>
        Lorem ipsum dolor sit amet consectetur. Blandit quam consectetur nisl
        volutpat. Mattis et viverra ipsum risus viverra consequat justo. Quis at
        viverra accumsan cras sapien. Odio nunc mi augue vestibulum interdum
        eros non tortor.
      </div>
    </div>
  );
};

export default ContainerWrapper;
