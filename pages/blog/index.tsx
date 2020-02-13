import React from "react";
import { Row, Col, Button } from 'antd'
import Link from "next/link"
import styled from 'styled-components'
import Logo from '../../assets/Logo'
import ArticleCard from '../../components/ArticleCard'
import Query from "../../components/Query"; 
import ARTICLES_QUERY from "../../apollo/queries/article/articles";

const Hero = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  height: 14rem;
  background: url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1526&q=80) no-repeat center center;
  background-size: cover;
  text-align: center;

  &::after {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    content: " ";
  }
`

const HeadingGroup = styled.div`
  position: relative;
  z-index: 2;
  min-width: 0px;
  width: 100%;
  max-width: 30rem;
  margin-left: auto;
  margin-right: auto;
  padding: 0px 1.5rem;

`

const BlogIndex = () => {  
  return (
    <Query query={ARTICLES_QUERY}>
      {({ data: { articles } }) => {
        return (
          <>
            <Hero>
              <HeadingGroup>
                <Logo />
              </HeadingGroup>
            </Hero>
            <Row type="flex" justify="start" align="top">
              {articles.map(article => (
                <Col xs={24} md={8}>
                  <ArticleCard article={article}/>
                </Col>
              ))}
            </Row>
          </>
        );
      }}
    </Query>
  );
};

export default BlogIndex; 