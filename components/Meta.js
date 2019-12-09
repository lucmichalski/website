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
          `,
        }}
      />
    </Head>
  </div>
)