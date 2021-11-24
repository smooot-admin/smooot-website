import Image from 'next/image';
import logo from '../assets/smooot logo.png';
import list from '../assets/list.png';
import profile from '../assets/profile.png';

import styles from '../styles/Navbar.module.scss';

const Navbar = () => {
    return (
        <div className={styles.container} >
            <div className={styles.logoCont} >
                <Image src={logo} />            
            </div>
            <div className={styles.btns} >
                <p> <Image src={list} /> </p>
                <p> <Image src={profile} /> </p>
            </div>
        </div>
    )
}

export default Navbar