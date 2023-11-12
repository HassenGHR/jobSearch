import React from 'react'
import styles from "./Layout.module.css";
import Navbar from '../NavBar/Navbar';
import Footer from '../FooterDiv/Footer';

const Layout = (props) => {
  return (
    <div className={styles.containerSection}>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout