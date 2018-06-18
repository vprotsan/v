import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import styles from './Learn.css'
import OverviewMenu from '../../fragments/OverviewMenu'
import Header from '../../fragments/Header'


export default class Learn extends Component{

  render(){
    return(
      <div className={styles.mainWrapper}>
        <Header />
        <div className="main-image">
          <div className={styles.horizSubMenu}>
            <nav>
              <ul className={styles.submenu}>
                <li className={styles.link}>
                  <Link className={styles.linkActive} to='/overview/'>overview</Link>
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
          <div className={styles.wrapper}>
              <div>
                  <h1>Why Serverless?</h1>
                  <div>
                    <p>Just like wireless internet has wires somewhere, serverless architectures still have servers somewhere.</p>

                    <p>What ‘serverless’ really means is that, as a developer you don’t have to think about those servers. You just focus on code.</p>
                  </div>
              </div>
              <div>
                <div className={styles.verticalSubMenu}>
                  <nav>
                    <ul className={styles.submenu}>
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
              </div>
          </div>
        </div>
     </div>
    )
  }

}
