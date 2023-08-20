import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.bg}>
    <div className={styles.last}>
        <p className={styles.quote}>Robotics can change the world of the living life and people <br /> generation whoever can people access the world and the influence people.</p>
        <div className={styles.contact}>
            <div className={styles.address}>
            <i class='bx bxs-map'></i>
                <p>Maulana Azad National Institute of Technology Bhopal, 462003 </p>
            </div>
            <div className={styles.phone}>
            <i class='bx bxs-phone' ></i>
                <p>Mayank-794565122 <br /> Arushi-214789655</p>
                
            </div>
            <div className={styles.email}>
            <i class='bx bxs-envelope' ></i>
                <p>roboticsnitb@gmail.com</p>
            </div>

        </div>
    </div>
        <footer className={styles.footer}>
        <div className={styles.footer_text}>
            <p>Copyright &copy; 2023 by Robotics NITB | All Rights Reserved.</p>
        </div>
    </footer>
    </div>
  )
}

export default Footer