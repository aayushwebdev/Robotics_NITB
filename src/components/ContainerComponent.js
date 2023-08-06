import styles from "./ContainerComponent.module.css";
const ContainerComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div
          className={styles.loremIpsumDolor}
        >{`Lorem ipsum dolor sit amet consectetur. Lectus purus suspendisse vitae sociis. Vestibulum pellentesque fusce ut aliquet sed ipsum fermentum nunc. A velit tempus velit nibh in nisi tinciduphasellus ornare non. Pellentesque dolor eget suspendisse blandit volutpat s erat etiam vitae egestas ut eu elementum senectus vitae. `}</div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div
          className={styles.loremIpsumDolor}
        >{`Lorem ipsum dolor sit amet consectetur. Lectus purus suspendisse vitae sociis. Vestibulum pellentesque fusce ut aliquet sed ipsum fermentum nunc. A velit tempus velit nibh in nisi tinciduphasellus ornare non. Pellentesque dolor eget suspendisse blandit volutpat s erat etiam vitae egestas ut eu elementum senectus vitae. `}</div>
      </div>
    </div>
  );
};

export default ContainerComponent;
