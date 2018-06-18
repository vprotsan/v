import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import styles from './Learn.css'

//fragments
import OverviewMenu from '../../fragments/OverviewMenu'
import Header from '../../fragments/Header'
import Logo from '../../fragments/Logo'

//images
import ServerlessMovementImage from '../../assets/theserverlessmovement.png'
import ZeroAdministration from '../../assets/zeroAdministration.svg'
import AutoScaling from '../../assets/AutoScaling.svg'
import PayPerUse from '../../assets/payperuse.svg'
import IncreasedVelocity from '../../assets/increasedvelocity.svg'


export default class Learn extends Component{

  render(){

    var colRight = classnames(styles.col, styles.right);
    var colLeft = classnames(styles.col, styles.left);

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
            <div className={styles.innerWrapper}>
                <div className={colLeft}>
                    <h2>The Serverless Movement</h2>
                    <p>Serverless has become a movement about developer empowerment. As a technology, it abstracts away the most menial parts of building an application, leaving you free to actually spend your days coding.</p>

                    <p>What this means is that you, the developer, can rapidly build apps that handle production-ready traffic. You don’t have to actively manage scaling for your applications. You don't have to provision servers, or pay for resources that go unused.</p>

                    <p>The technology is still early, but thousands of developers are already proving that serverless can enable them to launch applications at record speed and cost.</p>
                </div>
                <div className={colRight}>
                  <img src={ServerlessMovementImage} alt="The Serverless Movement" />
                </div>
            </div>
          </section>

          <section className={styles.whatMakesServerless}>
              <div className={styles.innerWrapper}>
                <div className={colLeft}>
                  <img src={ServerlessMovementImage} alt="The Serverless Movement" />
                </div>
                <div className={colRight}>
                  <h2>The Serverless Movement</h2>
                  <p>Serverless has become a movement about developer empowerment. As a technology, it abstracts away the most menial parts of building an application, leaving you free to actually spend your days coding.</p>

                  <p>What this means is that you, the developer, can rapidly build apps that handle production-ready traffic. You don’t have to actively manage scaling for your applications. You don't have to provision servers, or pay for resources that go unused.</p>

                  <p>The technology is still early, but thousands of developers are already proving that serverless can enable them to launch applications at record speed and cost.</p>
                </div>

              </div>
          </section>

          <section className={styles.getStarted}>
              <div className={styles.innerWrapper}>
                <p>focus on your business logic, not your servers.</p>
                <Link to='/#' className={styles.btn}>get started</Link>
              </div>
          </section>

          <section className={styles.benefits}>
              <h3>Benefits of Serverless Applications</h3>
              <p>These are the 4 core benefits of Serverless Applications you should know about</p>
              <div className={styles.innerWrapper}>
                  <div>
                    <img src={ZeroAdministration} alt="Zero administration"/>
                    <h4>Zero administration</h4>
                    <p>Deploy code without provisioning anything beforehand, or managing anything afterward. There is no concept of a fleet, an instance, or even an operating system. No more bothering the Ops department.</p>
                  </div>

                  <div>
                    <img src={AutoScaling} alt="Auto-scaling"/>
                    <h4>Auto-scaling</h4>
                    <p>Let your service providers manage the scaling challenges. No need to fire alerts or write scripts to scale up and down. Handle quick bursts of traffic and weekend lulls the same way -- with peace of mind.</p>
                  </div>

                  <div>
                    <img src={PayPerUse} alt="Pay per use"/>
                    <h4>Pay-per-use</h4>
                    <p>Function-as-a-service compute and managed services charged based on usage rather than pre-provisioned capacity. You can have complete resource utilization without paying a cent for idle time. The results? 90% cost-savings over a cloud VM, and the satisfaction of knowing that you never pay for resources you don’t use.</p>
                  </div>

                  <div>
                    <img src={IncreasedVelocity} alt="Increased velocity"/>
                    <h4>Increased velocity</h4>
                    <p>Shorten the loop between having an idea and deploying to production. Because there's less to provision up front and less to manage after deployment, smaller teams can ship more features. It's easier than ever to make your idea live.</p>
                  </div>
              </div>
          </section>

          <section className={styles.theserverlessFramework}>
            <div className={styles.innerWrapper}>
                <div className={colLeft}>
                  <h2>The Serverless Framework</h2>
                  <p>If the Serverless Application is the new and improved application house on the block, then the Serverless Framework is the door you use to enter that house.</p>
                  <p>Serverless Applications are the next step in cloud-native development, and they require automation. If you're tying together multiple managed services and functions, you cannot rely on a checklist of manual steps. You should be able to recreate your entire application with a command.</p>
                  <p>That is where the Serverless Framework comes in. Use the Serverless Framework CLI to build and deploy your application to any and every cloud provider with a consistent experience. The Framework automatically configures cloud vendor settings for you, based on the language you use and the cloud provider you deploy to.</p>
                  <p>Keeping a maniacal focus on business value applies to your development tooling as well. Kids, don't roll your own deployment tools.</p>
                </div>

                <div className={colRight}>
                  <img src={ServerlessMovementImage} alt="The Serverless Framework" />
                </div>
            </div>
          </section>

          <section className={styles.benefitsOfServFramework}>
              <h3>Benefits of Serverless Applications</h3>
              <p>These are the 4 core benefits of Serverless Applications you should know about</p>
              <div className={styles.innerWrapper}>

                  <div className={styles.itemBlock}>
                    <img src={ZeroAdministration} alt="Zero administration"/>
                    <h4>Zero administration</h4>
                    <p>Deploy code without provisioning anything beforehand, or managing anything afterward. There is no concept of a fleet, an instance, or even an operating system. No more bothering the Ops department.</p>
                  </div>

                  <div className={styles.itemBlock}>
                    <img src={AutoScaling} alt="Auto-scaling"/>
                    <h4>Auto-scaling</h4>
                    <p>Let your service providers manage the scaling challenges. No need to fire alerts or write scripts to scale up and down. Handle quick bursts of traffic and weekend lulls the same way -- with peace of mind.</p>
                  </div>

                  <div className={styles.itemBlock}>
                    <img src={PayPerUse} alt="Pay per use"/>
                    <h4>Pay-per-use</h4>
                    <p>Function-as-a-service compute and managed services charged based on usage rather than pre-provisioned capacity. You can have complete resource utilization without paying a cent for idle time. The results? 90% cost-savings over a cloud VM, and the satisfaction of knowing that you never pay for resources you don’t use.</p>
                  </div>

                  <div className={styles.itemBlock}>
                    <img src={IncreasedVelocity} alt="Increased velocity"/>
                    <h4>Increased velocity</h4>
                    <p>Shorten the loop between having an idea and deploying to production. Because there's less to provision up front and less to manage after deployment, smaller teams can ship more features. It's easier than ever to make your idea live.</p>
                  </div>
              </div>
          </section>

          <section className={styles.nextStep}>
            <div className={styles.innerWrapper}>
                <div className={colLeft}>
                  <h5>Next steps</h5>
                  <p>Check out all the different use cases for serverless applications. Take a peek at how the Serverless Framework compares to other software.</p>
                  <p>Or if you’re ready, follow our step-by-step guide to start building a Serverless Application with your favorite language.</p>
                </div>

                <div className={colRight}>

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
          </section>
        </div>
        <footer>
          <div className={styles.innerWrapper}>
            <Logo />
            <div className="footerWrapper">
                <div>
                  <nav>

                    <div>
                      <p className="menuTitle">developers</p>
                      <ul>
                        <li><Link to='#'>docs</Link></li>
                        <li><Link to="#">quick starts</Link></li>
                        <li><Link to="#">examples & guides</Link></li>
                      </ul>
                    </div>

                    <div>
                      <p className="menuTitle">developers</p>
                      <ul>
                        <li><Link to='#'>docs</Link></li>
                        <li><Link to="#">quick starts</Link></li>
                        <li><Link to="#">examples & guides</Link></li>
                      </ul>
                    </div>


                  </nav>
                </div>
                <div></div>
            </div>
          </div>
        </footer>
     </div>
    )
  }

}
