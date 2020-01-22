import React, { Component } from 'react'
import { Row, Col, Menu, Icon } from 'antd';
import styled from 'styled-components'
import Page from '../../layouts/Page'
import PlaybookCard from '../../components/PlaybookCard';
import withLocale from '../../hocs/withLocale'
import PlaybooksMenu from '../../components/PlaybooksMenu'

const Playbooks = () => {

  return (
    <Page>
      <Row type="flex" justify="center" align="top">
        <Col xs={0} md={7}>
          <PlaybooksMenu />
        </Col>
        <Col xs={24} md={12}>
          <PlaybookCard />
          <PlaybookCard />
        </Col>
      </Row>
    </Page>
  )
  
}

export default withLocale(Playbooks)