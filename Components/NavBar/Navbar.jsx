import Link from 'next/link';
import { useState } from 'react';
import styles from './Navbar.module.css';


export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <Link href="/" className={styles.navlogo}>
            JobSearch
          </Link>
          <ul
            className={
              isOpen === false
                ? styles.navmenu
                : styles.navmenu + ' ' + styles.active
            }
          >
            <li className={styles.navitem}>
              <Link href='/' onClick={openMenu} className={styles.navlink}>
              Jobs
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link href='/companies' onClick={openMenu} className={styles.navlink}>
              Companies
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link href='/about' onClick={openMenu} className={styles.navlink}>
              About
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link href='/contact' onClick={openMenu} className={styles.navlink}>
              Contact
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link href='/blog' onClick={openMenu} className={styles.navlink}>
              Blog
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link href='/login' onClick={openMenu} className={styles.navlink}>
              Login
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link href='/register' onClick={openMenu} className={styles.navlink}>
              Register
              </Link>
            </li>
          </ul>
          <button
            className={
              isOpen === false
                ? styles.hamburger
                : styles.hamburger + ' ' + styles.active
            }
            onClick={openMenu}
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </nav>
      </header>
     
    </>
  );
}