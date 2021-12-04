import type { NextPage } from "next";
import Image from "next/image";
import { BsDashLg } from 'react-icons/bs';
import Navbar from "../components/Navbar";
import phoneImage from "../assets/phone.png";
import twitter from '../assets/twitter.svg';
import instagram from '../assets/instagram.svg';
import facebook from '../assets/facebook.svg';

import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {

  const logo = require('../assets/phone.png');

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.head}>
          <div className={styles.right}>
            <div className={styles.smooot} >
              <h1>The</h1>
              <h1>Sm<span>ooo</span>t</h1>
              <h1>App</h1>
            </div>
            <p className={styles.coming}> {"< C O M I N G   S O O N />"} </p>
            <div className={styles.socials}>
              <p> <Image src={twitter} objectFit="contain" /> </p>
              <p> <Image src={instagram} /> </p>
              <p> <Image src={facebook} /> </p>
            </div>
          </div>
          <div className={styles.left}>
            <Image src={logo} />
          </div>
        </div>
        <div className={styles.center}>
          <div className={styles['underline-cont1']}>
            <div className={styles.underline1} ></div>
          </div>
          <h1 className={styles.first}>We Are So</h1>
          <h1 className={styles.second}>Smooot</h1>
          <div className={styles.underline} ></div>
          <p>
            The Smooot App is Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Risus est iaculis euismod condimentum et amet, vel ullamcorper
            vel. Hendrerit lobortis diam, proin pellentesque risus. Ultricies
            nisi amet, justo, sit. Nunc, purus auctor bibendum eleifend purus
            neque sit blandit nulla. Lacus tempus ut fames amet.
          </p>
        </div>
        <div className={styles.bottom}>
          <div className={styles.top}></div>
          <div className={styles.inner}>
            <h1>We Are</h1>
            <h1>Here</h1>
            <p>
              For Enquiries, and to participate in testing the <b>beta version</b> of our App
              reach out to us we are always available to chat
            </p>
          </div>
          <div className={styles.form} >
            <p className={styles.header} >CONTACT US</p>
            <form>
              <div>
                <label>NAME</label>
                <input type="text" />
              </div>
              <div>
                <label>EMAIL</label>
                <input type="text" />
              </div>
              <div>
                <label>YOUR MESSAGE</label>
                <input type="text" />
              </div>
              <div className={styles.button}>
                <button>SEND MESSAGE <BsDashLg /> </button>
              </div>
            </form>
          </div>
          <div className={styles.foot}>
            <div className={styles.innerFoot} >
              <div className={styles.socials}>
                <p className={styles.heading}>SOCIALS</p>
                <div className={styles.icons}>
                  <p> <Image src={twitter} /> </p>
                  <p> <Image src={instagram} /> </p>
                  <p> <Image src={facebook} /> </p>
                </div>
              </div>
              <div className={styles.contact}>
                <p className={styles.heading}>OUR CONTACT</p>
                <p>hello@smooot.com</p>
                <p>+234 000 000 ##3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
