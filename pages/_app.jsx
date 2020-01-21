import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import { ApolloProvider } from "@apollo/react-hooks";  
import withData from "../utils/apollo";
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
      <ApolloProvider client={apollo}>
        <Head>
          <title>Grimp - Power to marketing teams</title>
          <meta name='description' content='Make marketing pages convert again'/>
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
          <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" />
        </Head>
        <Providers>
          <Component {...pageProps} />
        </Providers>
      </ApolloProvider>
    )
  }
}

export default withData(MyApp)