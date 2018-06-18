/* Main entry of all requests */
import React, { Component, PropTypes } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ReactDOM from 'react-dom' // eslint-disable-line
import classnames from 'classnames'

import Learn from './pages/Learn'
import Header from './fragments/Header'

import './index.global.css'
import styles from './index.css'
const logo = process.env.LOGO

if (typeof window !== 'undefined') {
  // expose React for app scripts
  window.React = React
  window.ReactDOM = ReactDOM
}


export default class App extends Component {

  render() {

    return (
      <div className={styles.app}>

        <Router>
          <div className={styles.content}>
            <Learn />
          </div>
        </Router>

      </div>
    )
  }
}
