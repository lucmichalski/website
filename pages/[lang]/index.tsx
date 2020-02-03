import React from 'react'
import fetch from 'isomorphic-unfetch';
import parser from 'fast-xml-parser'

const Index = props => {

  return (
    <ul>
      {props.offers.map(offer => (
        <li>{offer.job_title}</li>
      ))}
    </ul>
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