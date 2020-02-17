import React from 'react'
import App from 'next/app'
import TagManager from 'react-gtm-module'
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config'
import Providers from '../components/Providers';
import { ApolloProvider } from "@apollo/react-hooks";  
import withData from "../utils/apollo";

const tagManagerArgs = {
  gtmId: 'GTM-KMVLCMK'
}

class MyApp extends App {
  componentDidMount () {
    TagManager.initialize(tagManagerArgs)
  }

  render() {
    const { Component, pageProps, apollo } = this.props
    return (
      <ApolloProvider client={apollo}>
        <DefaultSeo {...SEO} />
        <Providers>
          <Component {...pageProps} />
        </Providers>
      </ApolloProvider>
    )
  }
}

export default withData(MyApp)