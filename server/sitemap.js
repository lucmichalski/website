const sm = require('sitemap')

const sitemap = sm.createSitemap({
  hostname: 'https://grimp.io',
  cacheTime: 600000 // 600 sec - cache purge period
})

const setup = ({ server }) => {

  sitemap.add({
    url: '/blog',
    changefreq: 'daily',
    priority: 1
  })

  server.get('/sitemap.xml', (req, res) => {
    sitemap.toXML((err, xml) => {
      if (err) {
        res.status(500).end()
        return
      }

      res.header('Content-Type', 'application/xml')
      res.send(xml)
    })
  })
}

module.exports = setup