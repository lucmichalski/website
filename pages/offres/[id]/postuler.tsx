import {Row, Col } from 'antd'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import PageLayout from '../../../layouts/Page'
import ApplyForm from '../../../components/ApplyForm'
import Query from "../../../components/query";  
import OFFRE_QUERY from '../../../apollo/queries/offre/offre'


const Apply = () => {

  const router = useRouter()

  return (
    <Query query={ OFFRE_QUERY } id={67}>
      {({ data: { offre } }) => {
        return (
          <PageLayout title={offre.job_title}>
            <Row type="flex" justify="center" align="top">
              <Col xs={24} md={12}>
                <ApplyForm />
              </Col>
            </Row>
          </PageLayout>
        );
      }}
    </Query>
  )
}
  
export default Apply