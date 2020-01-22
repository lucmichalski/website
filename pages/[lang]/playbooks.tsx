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
import PLAYBOOKS_QUERY from "../../apollo/queries/category/categories";

const Playbooks = () => {
    
  const { locale } = useContext(LocaleContext)

  return (
    <Page>
      <Query query={PLAYBOOKS_QUERY} id={null}>
        {({ data: { categories } }) => {
          return (
            <div>
              {categories.map((category, i) => {
                return (
                  <li key={category.id}>
                    <Link
                      href={{
                        pathname: "category",
                        query: { id: category.id }
                      }}
                    >
                      <a className="uk-link-reset">{category.name}</a>
                    </Link>
                  </li>
                );
              })}
            </div>
          );
        }}
      </Query>
      <Row type="flex" justify="center" align="top">
        <Col xs={0} md={7}>
          <PlaybooksMenu businessRoles={["Marketing", "Sales"]} areas={["Marketing", "Sales"]} tools={["Marketing", "Sales"]} />
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