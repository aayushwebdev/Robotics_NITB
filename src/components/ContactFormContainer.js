import styles from "./ContactFormContainer.module.css";
const ContactFormContainer = () => {
  return (
    <div className={styles.contactUs}>
      <div className={styles.contactUsWrapper}>
        <div className={styles.send}>Contact us</div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.meetTheDevelopersWrapper}>
          <div className={styles.meetTheDevelopers}>Meet the developers</div>
        </div>
        <div className={styles.instagramParent}>
          <img
            className={styles.instagramIcon}
            alt=""
            src="/instagram@2x.png"
          />
          <img
            className={styles.instagramIcon}
            alt=""
            src="/linkedin-circled@2x.png"
          />
          <img
            className={styles.instagramIcon}
            alt=""
            src="/gmail-logo@2x.png"
          />
        </div>
        <div className={styles.vectorParent}>
          <img className={styles.frameChild} alt="" src="/rectangle-7.svg" />
          <div className={styles.frameGroup}>
            <div className={styles.connectWithUsWrapper}>
              <div className={styles.connectWithUs}>Connect with us</div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.frameItem} />
              <div className={styles.name}>Name</div>
            </div>
            <div className={styles.emailWrapper}>
              <div className={styles.email}>Email</div>
            </div>
            <div className={styles.typeMessageWrapper}>
              <div className={styles.typeMessage}>Type message</div>
            </div>
            <div className={styles.connectWithUsWrapper}>
              <div className={styles.sendWrapper}>
                <div className={styles.send}>send</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormContainer;
