import {Row, Col } from 'antd'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import Link from 'next/link'
import PageLayout from '../../layouts/Page'
import Query from "../../components/query";  
import OFFRE_QUERY from '../../apollo/queries/offre/offre'

const OfferGroup = styled.div`
  p {
    text-align: justify;
  }
`

const Offer = () => {

  const router = useRouter()

  return (
    <Query query={ OFFRE_QUERY } id={67}>
      {({ data: { offre } }) => {
        return (
          <PageLayout title={offre.job_title}>
            <Row type="flex" justify="center" align="top">
              <Col xs={24} md={6}>
                <Link href={'/offres/[id]/postuler'} as={`/offres/${offre.offer_keyid}/postuler`}>
                  <a>Button</a>
                </Link>
              </Col>
              <Col xs={24} md={12}>
                <OfferGroup>
                  <h2>À propos</h2>
                  <p>{offre.company_description}</p>
                  <h2>Descriptif du poste</h2>
                  <p>{offre.job_description}</p>
                </OfferGroup>
              </Col>
              <Col xs={0} md={6}/>
            </Row>
          </PageLayout>
        );
      }}
    </Query>
  )
}

export default Offer