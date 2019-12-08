import Head from 'next/head'

export default () => (
  <div>
    <Head>
      <title>Grimp - Power to marketing teams</title>
      <meta name='description' content='Make marketing pages convert again'/>
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <style>{`.async-hide { opacity: 0 !important}`}</style>
      <script
      dangerouslySetInnerHTML={{
          __html: `
          (function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;
          h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};
          (a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;
          })(window,document.documentElement,'async-hide','dataLayer',4000,
          {'GTM-MQ2QHK6':true});
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MQ2QHK6"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>
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
  </div>
)