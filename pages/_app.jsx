import React from 'react'
import App from 'next/app'
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config'
import Providers from '../components/Providers';
import { ApolloProvider } from "@apollo/react-hooks";  
import withData from "../utils/apollo";

class MyApp extends App {

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