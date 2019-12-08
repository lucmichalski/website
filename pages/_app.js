import React from 'react'
import App from 'next/app'
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: process.env.GOOGLE_TAG_MANAGER_ID
}

class MyApp extends App {
  componentDidMount () {
    TagManager.initialize(tagManagerArgs)
  }

  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default MyApp