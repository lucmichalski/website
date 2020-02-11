import React from 'react'
import { useRouter } from 'next/router'
import { ReactiveBase, DataSearch, ReactiveList, MultiDropdownList } from '@appbaseio/reactivesearch';
import { Row, Col, Menu, Icon } from 'antd';
import OfferCard from '../../components/OfferCard'
import Logo from '../../assets/Logo'
import styled from 'styled-components'

const StyledRow = styled(Row)`
  height: 200px;
  text-align: center;
  background: url(https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`

const StyledReactiveBase = styled(ReactiveBase)`

  .css-1sk3exe {
    justify-content: center;
    h4 {
      margin-top: 4rem;
    }
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
  background: white;
  padding: 20px;
  margin-top: -40px;
  position: absolute;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 5px 10px;
  width: 100%;

  .block {
    width: 100%;
  }
`

const JobsIndex = () => {

  const router = useRouter()

  return (
    <>
    <StyledRow type="flex" justify="center" align="middle">
      <Col xs={24} md={12}>
        <Logo />
      </Col>
    </StyledRow>
    <Row type="flex" justify="center" align="top">
      <Col xs={24} md={14}>
        <StyledReactiveBase
          app={process.env.APPBASE_APP_ID}
          credentials={process.env.APPBASE_API_KEY}
        >
          <SearchGroup>
            <DataSearch
              componentId="search"
              dataField={["job_title"]}
              queryFormat="and"
              placeholder="Intitulé ou mots-clés"
              defaultValue={(router.query.search !== undefined) && `${router.query.search}`}
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
                <h4>{`${stats.numberOfResults} jobs trouvés en ${stats.time} ms`}</h4>
              )
            }}
            react={{
              and: ['search', 'jobContract', 'locationSubadministrativeArea', 'secteur'],
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
    </>
  )
  
}

export default JobsIndex