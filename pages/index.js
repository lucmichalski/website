import React, { Component } from 'react';
import Head from 'next/head'
import TagManager from 'react-gtm-module'
import Header from "../components/Header"
import Heading from "../components/Heading"
import Footer from "../components/Footer"

const tagManagerArgs = {
  gtmId: 'GTM-MQ2QHK6'
}

class App extends Component {
  componentDidMount () {
    TagManager.initialize(tagManagerArgs)
  }

  render() {
    return (
      <>
        <Head>
          <title>Grimp - Call-To-Action manager for busy marketers</title>
          <link rel='icon' href='/favicon.ico' />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              !(function(p,r,i,v,a,c,y){p['MetomicObject']=a;p[a]=p[a]||function(){
              (p[a].q=p[a].q||[]).push(arguments)},p[a].l=1*new Date();c=r.createElement(i),
              y=r.getElementsByTagName(i)[0];c.async=1;c.src=v+'?d='+r.location.host;y.parentNode.insertBefore(c,y)
              })(window, document, 'script', 'https://consent-manager.metomic.io/embed.js', 'Metomic');
              Metomic('load', { projectId: 'prj:d1768f74-fb1a-4b89-9671-767d63ab5996' });
            `}}
          />
        </Head>
        <style jsx global>{`
          body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            -webkit-font-smoothing: antialiased;
            line-height: 1.3;
          }
          h1 {
            font-size: 46px;
          }
          h4 {
            font-size: 22px;
            letter-spacing: -0.48px;
            margin-bottom: 30px;
            line-height: 1.6em;
            color: rgba(23, 22, 24, 0.8);
            font-weight: normal;
          }
          *:focus {
            outline:none
          }
        `}</style>
        
        <Header />
        <Heading />
        <Footer />
      </>
    );
  }
}

export default App


