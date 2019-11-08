import Head from 'next/head'
import Header from "../components/Header"
import Heading from "../components/Heading"

export default () => (
  <div>
    <Head>
      <title>Grimp - Call-To-Action manager for busy marketers</title>
      <link rel='icon' href='/favicon.ico' />
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
    `}</style>
    <Header />
    <Heading />
  </div>
)
