import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/serverless-logo.svg';
import styles from './Logo.css'


export default class Logo extends Component{

  render(){
    return(
      <Link to='/' className={styles.logo}>
        <img
          id='logo'
          src={logo}
          width={177}
          height={30}
          ref={logo => { this.logo = logo }}
        />
        <span className={styles.logoText}>
          serverless
        </span>
      </Link>
    )
  }


}
