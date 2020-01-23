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
import PLAYBOOK_MENU_QUERY from "../../apollo/queries/playbook/menu";

const Playbooks = () => {
    
  const { locale } = useContext(LocaleContext)

  return (
    <Page>
      <Query query={PLAYBOOKS_QUERY} id={null}>
        {({ data: { playbooks } }) => {
          return (
            <Row type="flex" justify="center" align="top">
              <Col xs={0} md={7}> 
                <Query query={PLAYBOOK_MENU_QUERY} id={null}>
                  {({ data: { areas, tools, businessRoles }}) => (
                    <PlaybooksMenu areas={areas} businessRoles={businessRoles} tools={tools} />
                  )}
                </Query>
              </Col>
              <Col xs={24} md={12}>
                {playbooks.map((playbook) => (
                  <PlaybookCard key={playbook.id} playbook={playbook}/>
                ))}
              </Col>
            </Row>
          );
        }}
      </Query>
    </Page>
  )
  
}

export default withLocale(Playbooks)