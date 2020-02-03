import React from 'react'
import { Row, Col, Avatar, Tag } from 'antd';
import styled from 'styled-components'

const CardGroup = styled.div `
  background: ${props => props.theme.bg.matt};
  width: 100%;
  border-radius: 12px;
  padding: 50px 70px;
  margin: 20px 0;
  box-shadow: rgba(0,0,0,.09) 0 10px 20px 0;

  h3, h4 {
    color: ${props => props.theme.text.primary};
  }
`

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: .5rem;
`

const ToolsGroup = styled.div`
  .ant-avatar {
    margin-left: -0.5rem;
    border: solid 2px #fafafa;
  }
`

const CardContent = styled.div`
  margin-bottom: 1.5rem;
`

const CardTags = styled.div`
`

type OfferProps = { 
  offer: {
    offer_keyid: number,
    posting_date: number,
    updating_date: number,
    job_reference: string,
    job_title: string,
    company_name: string,
    id_agence: number,
    company_description: string,
    SecteurMetierInterim: string,
    job_description: string,
    applicant_profile: string,
    job_function: string,
    job_industry: string,
    location_administrativearea: string,
    location_subadministrativearea: string,
    location_town: string,
    job_type: string,
    job_statute: string,
    job_contract: string,
    application_email: string
  }
}

const OfferCard = ({ offer }: OfferProps) => {

  return (
    <a href="">
      <CardGroup>
        <CardHeader>
          <h3>{offer.job_title}</h3>
          <ToolsGroup>
            {offer.job_contract}
          </ToolsGroup>
        </CardHeader>
        <CardContent>
          <p>{offer.company_name}</p>
        </CardContent>
      </CardGroup> 
    </a>
  )
}

export default OfferCard