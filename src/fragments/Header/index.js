import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router-dom'
import handleClickAway from '../../utils/handleClickAway'
import styles from './Header.css'
import classnames from 'classnames'
const logo = process.env.LOGO


export default class Header extends Component{

  render(){

    return(
      <header id='header' ref={header => { this.header = header }}>
          <div className={`${styles.link}`}>
            <div className={styles.navLeft}>
              <Link to='/' className={styles.logo}>
                <img
                  id='logo'
                  width={28}
                  height={23}
                  className={styles.logoIcon}
                  ref={logo => { this.logo = logo }}
                />
                <span className={styles.logoText}>
                  serverless
                </span>
              </Link>
            </div>
            <div ref='toggle' className={styles.toggle}>
              <div className={styles.ham}>
                <div className={`${styles.bar}`} />
              </div>
            </div>
            <nav className={`${styles.navRight}`}>
              <ul className={styles.navItems}>
                <li className={styles.link}>
                  <Link to='/platform/' className={`${styles.blah} ${styles.mobileOnly}`}>platform</Link>
                </li>
                <li className={styles.link2}>
                  <Link to='/developers/' className={styles.link}>developers</Link>
                </li>
                <li className={styles.navItem}>
                  <Link to='/learn/' className={styles.link}>Learn</Link>
                </li>
                <li className={styles.navItem}>
                  <Link to='/resources/' className={`${styles.link}`}>resources</Link>
                </li>
                <li className={styles.navItem}>
                  <Link to='/enterprise/' className={styles.link}>enterprise</Link>
                </li>
                <li ref={cta => { this.cta = cta }}>sign up</li>
              </ul>
            </nav>
          </div>
      </header>
    )
  }
}
