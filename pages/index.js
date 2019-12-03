import React, { Component } from 'react';
import Head from 'next/head'
import TagManager from 'react-gtm-module'
import styled from 'styled-components'
import Header from "../components/Header"
import Hero from "../components/Hero"
import "slick-carousel/slick/slick.css";

const Content = styled.div`
  padding: 0 20px;

  @media (min-width: 768px) { 
    padding: 0px 80px;
  }

`;

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
          <title>Grimp - Power to marketing teams</title>
          <meta name='description' content='Make marketing pages convert again'/>
          <link rel='icon' type="image/x-icon" href='/favicon.ico' />
          <style>{`.async-hide { opacity: 0 !important}`}</style>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;
              h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};
              (a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;
              })(window,document.documentElement,'async-hide','dataLayer',4000,
              {'GTM-THWW83R':true});
              `,
            }}
          />
        </Head>
        <style jsx global>{`
          body { 
            font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
            -webkit-font-smoothing: antialiased;
            text-rendering: optimizelegibility;
            line-height: 1.3;
            background-color: #000;
          }
          h1 {
            color: #FFF;
            font-weight: 600;
            font-size: 48px;
            letter-spacing: -4px;
            line-height: 1;
            text-align: center;
          }
          @media (min-width: 768px) { 
            h1 {
              text-align: left;
              font-size: 72px;
            }
          }
          p {
            color: #8F9292;
            font-size: 24px;
            font-weight: 400;
            line-height: 1.4;
            margin-bottom: 40px;
            text-align: center;
          }
          @media (min-width: 768px) { 
            p {
              text-align: left;
              font-size: 26px;
            }
          }
          *:focus {
            outline:none
          }
        `}</style>
        <Header />
        <main>
          <Content>
            <Hero />
          </Content>
        </main>
      </>
    );
  }
}

export default App


