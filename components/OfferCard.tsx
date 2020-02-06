import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Row, Col } from 'antd';
import styled from 'styled-components'

const CardGroup = styled.div `
  background: ${props => props.theme.bg.matt};
  width: 100%;
  border-radius: 12px;
  margin: 20px 0;
  box-shadow: rgba(0,0,0,.09) 0 10px 20px 0;

  h3, h4 {
    color: ${props => props.theme.text.primary};
  }
`
const CardImage = styled.div`
  img {
    border-radius: 12px 0 0 12px;
    height: 140px; 
    width: 100%; 
    object-fit: cover;
  }
`

const CardContent = styled.div`
  padding: 1.5rem;

  h4 {
    font-size: 0.625rem;
    color: rgb(151, 153, 157);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 12px;
  }
`

const DetailsGroup = styled.ul`
  display: flex;
  flex-wrap: wrap;
  font-size: 0.75rem;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: row;
  -webkit-box-pack: start;
  justify-content: flex-start;
  color: rgb(151, 153, 157);
  list-style: none;
  padding-inline-start: 0;

  li {
    margin: 0px 0.8125rem 0.3rem 0px;
  }
`

type OfferProps = {
  key: number,
  offer: {
    _id: number,
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

  const router = useRouter()
  const { id } = router.query

  function IndustryImage(props) {
    const industry = props.industry;
    if (industry === "Tertiaire") {
      return <img src="/tertiary.jpg"/>
    } else if (industry === "Industrie") {
      return <img src="/industry.jpg"/>
    }
    return <img src="/building.jpg"/>
  }


  return (
    <Link href={'/offres/[id]'} as={`/offres/${offer._id}`}>
      <a>
        <CardGroup>
          <Row type="flex" justify="center" align="top">
            <Col xs={24} md={8}>
              <CardImage>
                <IndustryImage industry={offer.SecteurMetierInterim} />
              </CardImage>
            </Col>
            <Col xs={24} md={16}>
              <CardContent>
                <h4>{offer.company_name}</h4>
                <h3>{offer.job_title}</h3>
                <DetailsGroup>
                  <li>
                    {offer.job_contract}
                  </li>
                  <li>
                    {offer.job_type}
                  </li>
                  <li>
                    {offer.location_town}
                  </li>
                  <li>
                    {offer.posting_date}
                  </li>
                </DetailsGroup>
              </CardContent>
            </Col>
          </Row>
        </CardGroup> 
      </a>
    </Link>
  )
}

export default OfferCard