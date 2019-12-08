import { Row, Col } from 'antd';
import Page from '../layouts/main'

export default () => (
  <Page>
    <Row type="flex" justify="center" align="middle" >
      <Col xs={24} md={10}>
        <h1>Demo</h1>
        <img src="/widget1.png" width="600px" alt="Widget Grimp"/>
      </Col>
    </Row>
  </Page>
)