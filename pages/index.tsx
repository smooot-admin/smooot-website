import type { NextPage } from "next";
import Image from "next/image";
import { BsDashLg } from 'react-icons/bs';
import Navbar from "../components/Navbar";
import phoneImage from "../assets/phone.png";
import twitter from '../assets/twitter.svg';
import instagram from '../assets/instagram.svg';
import facebook from '../assets/facebook.svg';
import backgroundVideo from '../assets/landing.mp4';

import firebase from 'firebase/compat/app';

import { useCollectionData } from 'react-firebase-hooks/firestore'

import styles from "../styles/Home.module.scss";

import 'firebase/compat/firestore';
import 'firebase/compat/auth';

firebase.initializeApp({
  apiKey: "AIzaSyDhtxFnoBtinzQDRFBmX4V0eSkciWyOxUA",
  authDomain: "smooot-6d194.firebaseapp.com",
  projectId: "smooot-6d194",
  storageBucket: "smooot-6d194.appspot.com",
  messagingSenderId: "376821638138",
  appId: "1:376821638138:web:fb79afd0694f4a21d67a43",
  measurementId: "G-XSQXSJVVSX"
});

const firestore = firebase.firestore(); 

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
            <p className={styles.coming}> {"<"} C O M I N G <span className={styles.gap}></span> S O O N {"/>"} </p>
            {/* <div className={styles.socials}>
              <p> <Image src={twitter} objectFit="contain" /> </p>
              <p> <a href="https://www.instagram.com/smoootapp/" target="_blank" rel="noopener noreferrer"><Image src={instagram} /></a></p>
              <p> <a href="https://web.facebook.com/smoootapp/" target="_blank" rel="noopener noreferrer"><Image src={facebook} /></a></p>
            </div> */}
          </div>
          <div className={styles.left}>
            {/* <div className={styles.overlay}></div> */}
            <video autoPlay playsInline muted loop poster={logo}>
              <source src={backgroundVideo} type="video/mp4" />
            </video>
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
            The smooot app is a next generation platform connecting passengers and riders Smooot provides a
            platform for individuals (Passengers) to book/order and pay for interstate travel in Nigeria
            seamlessly. Smooot intends and is working on making a secured platform for all the stakeholders
            using the platform. The team at smooot are working in providing a unique solution in solving the
            challenges associated with booking and paying for interstate travels .While we are working on
            building a unique platform for all, Keep calm and Stay smooot!
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
                  <p> <a href="https://www.instagram.com/smoootapp/" target="_blank" rel="noopener noreferrer"><Image src={instagram} /></a></p>
                  <p> <a href="https://web.facebook.com/smoootapp/" target="_blank" rel="noopener noreferrer"><Image src={facebook} /></a></p>
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
