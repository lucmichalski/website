import React, { Component, useContext } from 'react'
import { Row, Col, Menu, Icon } from 'antd';
import styled from 'styled-components'
import Page from '../../layouts/Page'
import PlaybookCard from '../../components/PlaybookCard';
import { LocaleContext } from '../../context/LocaleContext'
import withLocale from '../../hocs/withLocale'
import PlaybooksMenu from '../../components/PlaybooksMenu'
import Link from "next/link"  
import Query from "../../components/query"; 
import PLAYBOOKS_QUERY from "../../apollo/queries/playbook/playbooks";

const Playbooks = () => {
    
  const { locale } = useContext(LocaleContext)

  return (
    <Page> 
      <Row type="flex" justify="center" align="top">
        <Col xs={0} md={7}>
          
          <PlaybooksMenu businessRoles={["Marketing", "Sales"]} areas={["Marketing", "Sales"]} tools={["Marketing", "Sales"]} />
        </Col>
        <Col xs={24} md={12}>
          <Query query={PLAYBOOKS_QUERY} id={null}>
            {({ data: { playbooks } }) => (
              playbooks.map((playbook, i) => {
                return (
                  <li key={playbook.id}>
                    <PlaybookCard playbook={playbook}/>
                  </li>
                );
              })
            )}
          </Query>
        </Col>
      </Row>
    </Page>
  )
  
}

export default withLocale(Playbooks)