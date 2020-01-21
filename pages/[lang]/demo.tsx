import { Row, Col } from 'antd';
import MainLayout from '../../layouts/Landing'
import Nav from '../../components/Nav'

export default () => (
  <MainLayout>
    <Row type="flex" justify="center" align="middle" >
      <Col xs={24} md={10}>
        <h1>Demo</h1>
        <Nav />
      </Col>
    </Row>
  </MainLayout>
)