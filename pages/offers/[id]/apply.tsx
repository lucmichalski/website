import {Row, Col } from 'antd'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch';
import parser from 'fast-xml-parser'
import PageLayout from '../../../layouts/Page'


const Apply = ( {offers} ) => {

  const router = useRouter()
  const { id } = router.query
  const offer = offers.find(offer => offer.offer_keyid === Number(id))

  return (
    <PageLayout title={offer.job_title}>
      <Row type="flex" justify="center" align="top">
        <Col xs={24} md={12}>
          {offer.job_title}
        </Col>
      </Row>
    </PageLayout>
  )
}

Apply.getInitialProps = async function() {
 
  const res = await fetch('https://www.mytalentplug.com/xml.aspx?jbID=u/S3BRjmcl8=')
  const xml = await res.text()
  const offers = await parser.parse(xml).offers.offer;
  return { offers }

};
  
  
export default Apply