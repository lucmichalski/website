import React from 'react'
import { Row, Col, Menu, Icon } from 'antd';
import fetch from 'isomorphic-unfetch';
import parser from 'fast-xml-parser'
import OfferCard from '../components/OfferCard'

const Index = props => {

  return (
    <Row type="flex" justify="center" align="top">
      <Col xs={24} md={12}>
        {props.offers.map(offer => (
          <OfferCard
            offer={offer}
          />
        ))}
      </Col>
    </Row>
  )

  
}

Index.getInitialProps = async function() {
  const res = await fetch('http://www.mytalentplug.com/xml.aspx?jbID=u/S3BRjmcl8=')
  const xml = await res.text()
  const json = await parser.parse(xml).offers.offer;

  return {
    offers: json
  }

};

export default Index