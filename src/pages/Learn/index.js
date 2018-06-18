import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import styles from './Learn.css'
import OverviewMenu from '../../fragments/OverviewMenu'
import Header from '../../fragments/Header'
import ServerlessMovementImage from '../../assets/theserverlessmovement.png'


export default class Learn extends Component{

  render(){

    var colClass = classnames(styles.col, styles.right);

    return(
      <div className={styles.mainWrapper}>
        <Header />
        <div className="outerWrapper">
          <div className={styles.mainImage}>
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
            <div className={styles.mainImageInnerwrapper}>
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
          <section className={styles.theserverlessmovement}>
            <div className={colClass}>
              <h2>The Serverless Movement</h2>
              <p>Serverless has become a movement about developer empowerment. As a technology, it abstracts away the most menial parts of building an application, leaving you free to actually spend your days coding.</p>

              <p>What this means is that you, the developer, can rapidly build apps that handle production-ready traffic. You don’t have to actively manage scaling for your applications. You don't have to provision servers, or pay for resources that go unused.</p>

              <p>The technology is still early, but thousands of developers are already proving that serverless can enable them to launch applications at record speed and cost.</p>
            </div>
              <div className={styles.col + styles.right}>
                <img src={ServerlessMovementImage} alt="The Serverless Movement" />
              </div>
          </section>

          <section className={styles.whatMakesServerless}>
              <div className={styles.col + styles.right}>
                <img src={ServerlessMovementImage} alt="The Serverless Movement" />
              </div>
              <div className={colClass}>
                <h2>The Serverless Movement</h2>
                <p>Serverless has become a movement about developer empowerment. As a technology, it abstracts away the most menial parts of building an application, leaving you free to actually spend your days coding.</p>

                <p>What this means is that you, the developer, can rapidly build apps that handle production-ready traffic. You don’t have to actively manage scaling for your applications. You don't have to provision servers, or pay for resources that go unused.</p>

                <p>The technology is still early, but thousands of developers are already proving that serverless can enable them to launch applications at record speed and cost.</p>
              </div>
          </section>

          <section className={styles.getStarted}>
              <h3>focus on your business logic, not your servers.</h3>
              <Link to='/#' className={styles.btn}>get started</Link>
          </section>

          <section className={styles.benefits}>
              <h3>focus on your business logic, not your servers.</h3>
              <Link to='/#' className={styles.btn}>get started</Link>
          </section>



        </div>
     </div>
    )
  }

}
