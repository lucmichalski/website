import React from "react";
import { Row, Col, Tag } from 'antd'
import styled from 'styled-components'
import ArticleCard from '../../components/ArticleCard'
import Query from '../../components/Query'
import ARTICLES_QUERY from "../../apollo/queries/article/articles";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ArticleAuthor from '../../components/ArticleAuthor'
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const StyledRow = styled(Row)`
  padding-top: 50px;
  @media only screen and (min-width: 768px) {
    background-color: #242b4f;
    padding: 200px 0;
    position: relative;
  }
`

const OverDiv = styled.div`
  @media only screen and (min-width: 768px) {
    height: 34rem
  }
`

const OverGroup = styled.div`
  @media only screen and (min-width: 768px) {
    margin-top: -100px;
    position: absolute;
  }
`

const ImageGroup = styled.div`
  margin-bottom: 12px;
  img {
    height: 26rem;
    width: 100%;
    object-fit: cover;
  }
`
const LastArticleContentGroup = styled.div`
  h2 {
    color: white;
    font-size: 2.8rem;
    margin: 18px 0;
  }
`

const BlogIndex = () => {  
  return (
    <Query query={ARTICLES_QUERY}>
      {({ data: { articles } }) => {
        const lastArticle = articles.slice(0, 1)[0];
        const otherArticles = articles.slice(1, articles.length);
        return (
          <>
            <Header afterScroll initialColor="white"/>
            <StyledRow type="flex" justify="start" align="middle">
              <Col xs={0} md={8}>
                <ImageGroup>
                  <LazyLoadImage src={lastArticle.image.media.url} alt={lastArticle.image.alt} effect="blur"/>
                </ImageGroup>
              </Col>
              <Col xs={0} md={{span: 10, offset: 1}}>
                <LastArticleContentGroup>
                  <Tag color={lastArticle.category.color}>{lastArticle.category.name}</Tag>
                  <h2>{lastArticle.title}</h2>
                  <p style={{fontSize: "1.4rem"}}>{lastArticle.description}</p>
                  <ArticleAuthor article={lastArticle}/>
                </LastArticleContentGroup>
                <Col xs={24} md={0}>
                  <ArticleCard article={lastArticle}/>
                </Col>
              </Col>
            </StyledRow>
            <Row type="flex" justify="start" align="top">
              <OverDiv/>
              <OverGroup>
                {otherArticles.map(article => (
                  <Col xs={24} md={8}>
                    <ArticleCard article={article}/>
                  </Col>
                ))}
              </OverGroup>
            </Row>
            <Footer/>
          </>
        );
      }}
    </Query>
  );
};

export default BlogIndex; 