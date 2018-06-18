import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router-dom'
import styles from './OverviewMenu.css'
import classnames from 'classnames'


export default class OverviewMenu extends Component{

  render(){

    return(
      <div className={styles.overviewMenu}>
        <nav>
          <ul className={styles.submenu}>
            <li className={styles.link}>
              <Link to='/overview/'>overview</Link>
            </li>
            <li className={styles.link}>
              <Link to='/usecases/'>usecases</Link>
            </li>
            <li className={styles.link}>
              <Link to='/comparisons/'>comparisons</Link>
            </li>
            <li className={styles.link}>
              <Link to='/casestudies/'>casestudies</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
