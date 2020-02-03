import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config'
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
    const { Component, pageProps, apollo } = this.props
    return (
      <>
        <Head>
          <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
          <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" />
        </Head>
        <DefaultSeo {...SEO} />
        <Providers>
          <Component {...pageProps} />
        </Providers>
      </>
    )
  }
}

export default MyApp