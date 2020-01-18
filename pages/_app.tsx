import React from 'react'
import App from 'next/app'
import Head from '../components/Head'
import TagManager from 'react-gtm-module'
import Providers from '../components/Providers';

const tagManagerArgs = {
  gtmId: 'GTM-MQ2QHK6'
}

class MyApp extends App {
  componentDidMount () {
    TagManager.initialize(tagManagerArgs)
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head />
        <Providers>
          <Component {...pageProps} />
        </Providers>
      </>
    )
  }
}

export default MyApp