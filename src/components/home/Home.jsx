import React, {useState} from 'react';
import styles from './Home.module.css';
import Logo from '../../images/logo.png';
import {AiOutlineMenu, AiOutlineClose, AiOutlineSearch, AiOutlineUser} from "react-icons/ai";


const Home = () => {
    const [nav, setNav] = useState(false);

  return (
    <div className={styles.home}>
          
        <header className={styles.navbar}>
            <img className={styles.logo} src={Logo} alt='' />
            <div>
            <nav>
                <ul className={nav ? [styles.menu, styles.active].join(' ') : [styles.menu]}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Events</a></li>
                    <li><a href="/">Projects</a></li>
                    <li><a href="/">Team</a></li>
                    <button className={styles.register}>Register</button>
                    
            
                </ul>
                
            </nav>
            
            </div>
            <div onClick={()=> setNav(!nav)} className={styles.mobile_btn}>
            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
            
            
          </div>
        </header>
        <div className={styles.home_content}>
            <h1>ROBOTICS CLUB</h1>
            <h3>MANIT BHOPAL</h3>
        </div>
        
    </div>
  )
}

export default Home