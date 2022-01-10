import type { NextPage } from "next";
import { useState, FormEvent, ChangeEvent } from 'react';
import Image from "next/image";
import { BsDashLg } from 'react-icons/bs';
import axios from 'axios';
import Navbar from "../components/Navbar";
// import phoneImage from "../assets/phone.png";
import twitter from '../assets/twitter.svg';
import instagram from '../assets/instagram.svg';
import facebook from '../assets/facebook.svg';
import backgroundVideo from '../assets/landing.mp4';
import { server } from '../constants/server'

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import 'firebase/compat/auth';

// import { useCollectionData } from 'react-firebase-hooks/firestore'

import styles from "../styles/Home.module.scss";


const firebaseApp = initializeApp({
  apiKey: "AIzaSyCSZKaNLcbVPUQzuB-S9rvHrnDO1207OUY",
  authDomain: "smooot-app.firebaseapp.com",
  projectId: "smooot-app",
  storageBucket: "smooot-app.appspot.com",
  messagingSenderId: "309770591549",
  appId: "1:309770591549:web:1e199b3fd9810c99d13954",
  measurementId: "G-YY18GC39KD"
});

const db = getFirestore(firebaseApp); 
const messages = collection(db, "messages");

const Home: NextPage = () => {
  
  const logo = require('../assets/phone.png');

  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [text, setText] = useState("");

  const handleName = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handleMessage = (e: ChangeEvent<HTMLInputElement>) => setMessage(e.target.value);

  const postMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);
    setText("");
    setLoading(true);

    const userQuery = query(
      messages,
      where('email', '==', email)
    )

    try {
      const querySnapshot = await getDocs(userQuery);

      if (querySnapshot.docs.length > 0) {
        setError(true);
        setText('You have posted a message before.');
        setLoading(false);
      } else {
        await addDoc(messages, {
          name,
          email,
          message,
          date: new Date,
        });

        const body = {
          email,
        }
        const sendEmail = await axios.post(`${server}/email/send`, body);
        console.log(sendEmail);

        setLoading(false);
        setSuccess(true);
        setText("Your message has been posted. Thank you");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
      setText("Error posting message. Try again later")
    }
  }

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
            <div className={
              success ? `${styles.box} ${styles.success}` :
              error ? `${styles.box} ${styles.error}` :
              styles.alert
            }>
              {text}
            </div>
            <form onSubmit={postMessage} >
              <div>
                <label>NAME</label>
                <input type="text" value={name} onChange={handleName} />
              </div>
              <div>
                <label>EMAIL</label>
                <input type="email" value={email} onChange={handleEmail} />
              </div>
              <div>
                <label>YOUR MESSAGE</label>
                <input type="text" value={message} onChange={handleMessage} />
              </div>
              <div className={styles.button}>
                <button disabled={email.length < 1 || name.length < 1 || message.length < 1} type="submit"> {loading ? "LOADING..." : "SEND MESSAGE"} <BsDashLg /> </button>
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
