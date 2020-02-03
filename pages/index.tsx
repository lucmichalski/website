import React from 'react'
import { ReactiveBase } from '@appbaseio/reactivesearch';
import Appbase from 'appbase-js'
import { Row, Col, Menu, Icon } from 'antd';
import fetch from 'isomorphic-unfetch';
import parser from 'fast-xml-parser'
import OfferCard from '../components/OfferCard'

const Index = props => {

  return (
    <Row type="flex" justify="center" align="top">
      <ReactiveBase
        app="metierinterim"
        credentials="0nJWCHXeL:d82e4323-1236-4946-90c2-b6ec4205e8de"
        >
        Hello from ReactiveSearch!
      </ReactiveBase>
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

  var bulkBody = []
  json.map((offer) => {
    var index = { index: { _id: offer.offer_keyid } }
    var body = { 
      posting_date: offer.posting_date,
      updating_date: offer.updating_date,
      job_reference: offer.job_reference,
      job_title: offer.job_title,
      company_name: offer.company_name,
      id_agence: offer.id_agence,
      company_description: offer.company_description,
      SecteurMetierInterim: offer.SecteurMetierInterim,
      job_description: offer.job_description,
      applicant_profile: offer.applicant_profile,
      job_function: offer.job_function,
      job_industry: offer.job_industry,
      location_administrativearea: offer.location_administrativearea,
      location_subadministrativearea: offer.location_subadministrativearea,
      location_town: offer.location_town,
      job_type: offer.job_type,
      job_statute: offer.job_statute,
      job_contract: offer.job_contract,
      application_email: offer.application_email 
    }
    bulkBody.push(index, body)
  })

  var appbase = Appbase({
    "url": "https://scalr.api.appbase.io",
    "app": "metierinterim",
    "credentials": "0nJWCHXeL:d82e4323-1236-4946-90c2-b6ec4205e8de"
  })
  appbase
    .bulk({
      type: "_doc",
      body: bulkBody
    })
    .then(res => {
      console.log('successfully indexed: ', res);
    })
    .catch(err => {
      console.log('indexing error: ', err);
    });
  
    console.log(json)

  return {
    offers: json
  }

};

export default Index