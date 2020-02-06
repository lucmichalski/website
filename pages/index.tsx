import React from 'react'
import { ReactiveBase, DataSearch, ReactiveList, MultiDropdownList } from '@appbaseio/reactivesearch';
import { Row, Col, Menu, Icon } from 'antd';
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

export default Index