import React from 'react'
import styles from './Project.module.css';
import sponsor from '../../images/sponsor.png';



const Project = () => {
  return (
    <div className={styles.bg}>
        <div className={styles.luxury}>
            <div className={styles.heading}>
                <h2>Events</h2>
            </div>
            <div className={styles.container}>
                <div className={styles.card}>
                    <img src="https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <div className={styles.content}>
                        <h3>Rolls Royce</h3>
                        <button>Read More..</button>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src="https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <div className={styles.content}>
                        <h3>Rolls Royce</h3>
                        <button>Read More..</button>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src="https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <div className={styles.content}>
                        <h3>Rolls Royce</h3>
                        <button>Read More..</button>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src="https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <div className={styles.content}>
                        <h3>Rolls Royce</h3>
                        <button>Read More..</button>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src="https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <div className={styles.content}>
                        <h3>Rolls Royce</h3>
                        <button>Read More..</button>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src="https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <div className={styles.content}>
                        <h3>Rolls Royce</h3>
                        <button>Read More..</button>
                    </div>
                </div>
            </div>
        
        </div>
        <div className={styles.sponsor}>
                <div className={styles.sponsor_content}>
                    <img src={sponsor} alt='sponsor-img' />
                    <img src={sponsor} alt='sponsor-img' />
                    <img src={sponsor} alt='sponsor-img' />
                    <img src={sponsor} alt='sponsor-img' />
                    <img src={sponsor} alt='sponsor-img' />
                    <img src={sponsor} alt='sponsor-img' />
                    
                </div>
            </div>
    </div>
    

        
  )
}

export default Project