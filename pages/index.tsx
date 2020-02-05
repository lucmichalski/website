import React from 'react'
import { ReactiveBase, DataSearch, ReactiveList, MultiDropdownList } from '@appbaseio/reactivesearch';
import Appbase from 'appbase-js'
import { Row, Col, Menu, Icon } from 'antd';
import fetch from 'isomorphic-unfetch';
import parser from 'fast-xml-parser'
import OfferCard from '../components/OfferCard'
import styled from 'styled-components'

const StyledReactiveBase = styled(ReactiveBase)`

  .css-1sk3exe {
    justify-content: center;
    margin: 2rem 0;
  }

  .css-1i2ldnt {
    display: none;
  }

`

const SearchGroup = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;

  .block {
    width: 100%;
  }
`

const Index = () => {

  return (
    <Row type="flex" justify="center" align="top">
      <Col xs={24} md={14}>
        <StyledReactiveBase
          app={process.env.APPBASE_APP_ID}
          credentials={process.env.APPBASE_API_KEY}
        >
          <SearchGroup>
            <DataSearch
              componentId="mainSearch"
              dataField={["job_title"]}
              queryFormat="and"
              placeholder="Mots-clés"
              className="block"
            />
            <MultiDropdownList
              componentId="jobContract"
              dataField="job_contract.keyword"
              placeholder="Contrat"
              className="block"
            />
            <MultiDropdownList
              componentId="locationSubadministrativeArea"
              dataField="location_subadministrativearea.keyword"
              placeholder="Où ?"
              className="block"
            />
            <MultiDropdownList
              componentId="secteur"
              dataField="SecteurMetierInterim.keyword"
              placeholder="Secteur"
              className="block"
            />
          </SearchGroup>  
          <ReactiveList
            componentId="results"
            dataField="offer"
            pagination={true}
            size={30}
            pages={3}
            renderResultStats={function(stats) {
              return (
                <h4>{`${stats.displayedResults} job sur un total de ${stats.numberOfResults} en ${stats.time} ms`}</h4>
              )
            }}
            react={{
              and: ['mainSearch', 'jobContract', 'locationSubadministrativeArea', 'secteur'],
            }}
            render={({ data }) => (
              <ReactiveList.ResultCardsWrapper>
                {data.map(offer => (
                  <OfferCard
                    key={offer.id}
                    offer={offer}
                  />
                ))}
              </ReactiveList.ResultCardsWrapper>
            )}
          />
        </StyledReactiveBase>
      </Col>
    </Row>
  )
  
}

Index.getInitialProps = async function() {
  const res = await fetch('https://www.mytalentplug.com/xml.aspx?jbID=u/S3BRjmcl8=')
  const xml = await res.text()
  const json = await parser.parse(xml).offers.offer;

  // var bulkBody = []
  // json.map((offer) => {
  //   var index = { index: { _id: offer.offer_keyid } }
  //   var body = { 
  //     posting_date: offer.posting_date,
  //     updating_date: offer.updating_date,
  //     job_reference: offer.job_reference,
  //     job_title: offer.job_title,
  //     company_name: offer.company_name,
  //     id_agence: offer.id_agence,
  //     company_description: offer.company_description,
  //     SecteurMetierInterim: offer.SecteurMetierInterim,
  //     job_description: offer.job_description,
  //     applicant_profile: offer.applicant_profile,
  //     job_function: offer.job_function,
  //     job_industry: offer.job_industry,
  //     location_administrativearea: offer.location_administrativearea,
  //     location_subadministrativearea: offer.location_subadministrativearea,
  //     location_town: offer.location_town,
  //     job_type: offer.job_type,
  //     job_statute: offer.job_statute,
  //     job_contract: offer.job_contract,
  //     application_email: offer.application_email 
  //   }
  //   bulkBody.push(index, body)
  // })

  // var appbase = Appbase({
  //   "url": process.env.APPBASE_API_URL,
  //   "app": process.env.APPBASE_APP_ID,
  //   "credentials": process.env.APPBASE_API_KEY
  // })
  // appbase
  //   .bulk({
  //     type: "_doc",
  //     body: bulkBody
  //   })
  //   .then(res => {
  //     console.log('successfully indexed: ', res);
  //   })
  //   .catch(err => {
  //     console.log('indexing error: ', err);
  //   });


  // To display props.offers inside index without Appbase.io
  return {
    offers: json
  }

};

export default Index