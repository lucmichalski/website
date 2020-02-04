import { useRouter } from 'next/router'
import fetch from 'isomorphic-unfetch';
import parser from 'fast-xml-parser'

const Offer = props => {
  const router = useRouter()
  const { id } = router.query
  const offer = props.offers.find(offer => offer.offer_keyid === Number(id))

  return (
    <>
      hello: {offer.job_title}
    </>
  )
}

Offer.getInitialProps = async function() {
 
  const res = await fetch('http://www.mytalentplug.com/xml.aspx?jbID=u/S3BRjmcl8=')
  const xml = await res.text()
  const json = await parser.parse(xml).offers.offer;

  return {
    offers: json
  }

};
  
export default Offer