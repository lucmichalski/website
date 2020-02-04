import React from 'react'
import App from 'next/app'
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config'
import Providers from '../components/Providers';

class MyApp extends App {

  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <DefaultSeo {...SEO} />
        <Providers>
          <Component {...pageProps} />
        </Providers>
      </>
    )
  }
}

export default MyApp