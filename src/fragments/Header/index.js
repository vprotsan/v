import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router-dom'
import handleClickAway from '../../utils/handleClickAway'
import Logo from '../Logo'
import styles from './Header.css'
import classnames from 'classnames'
import logo from '../../assets/serverless-logo.svg';


export default class Header extends Component{

  render(){

    return(
      <header id={styles.header} ref={header => { this.header = header }}>
          <div className={styles.container}>
            <Logo />
            <div ref='toggle' className={styles.toggle}>
              <div className={styles.ham}>
                <div className={`${styles.bar}`} />
              </div>
            </div>
            <nav className={styles.navRight}>
              <ul className={styles.navItems}>
                <li className={styles.link}>
                  <Link to='/learn/' className={styles.linkActive}>Learn</Link>
                </li>
                <li className={styles.link}>
                  <Link to='/developers/' className={styles.link}>developers</Link>
                </li>
                <li className={styles.link}>
                  <Link to='/platform/' className={styles.link}>platform</Link>
                </li>
                <li className={styles.link}>
                  <Link to='/community/' className={styles.link}>community</Link>
                </li>
                <li className={styles.link}>
                  <Link to='/enterprise/' className={styles.link}>enterprise</Link>
                </li>
                <li className={styles.link}>
                  <Link to='/resources/' className={styles.link}>resources</Link>
                </li>
                <li className={styles.link} ref={cta => { this.cta = cta }}>sign up</li>
              </ul>
            </nav>
          </div>
      </header>
    )
  }
}
