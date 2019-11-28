import React, { Component } from 'react';
import Head from 'next/head'
import TagManager from 'react-gtm-module'
import Header from "../components/Header"
import Hero from "../components/Hero"
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
          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        </Head>
        <style jsx global>{`
          body { 
            font-family: Colfax, "Neue Helvetica W02", "Helvetica Neue", Helvetica, Arial, sans-serif;
            -webkit-font-smoothing: antialiased;
            line-height: 1.3;
            background-color: #000000;
          }
          h1 {
            color: #FFF;
            font-weight: 600;
            font-size: 72px;
            letter-spacing: -4px;
            line-height: 1;
          }
          p {
            color: #FFF;
            font-size: 26px;
            font-weight: 400;
            line-height: 1.4;
            margin-bottom: 40px;
          }
          *:focus {
            outline:none
          }
        `}</style>
        <Header />
        <Hero />
        <Footer />
      </>
    );
  }
}

export default App


