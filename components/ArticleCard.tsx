import React from 'react'
import { Row, Col, Tag } from 'antd'
import styled from 'styled-components'
import ArticleAuthor from './ArticleAuthor'

const CardGroup = styled.div`
  margin: 1rem;

  h2 {
    font-size: 21px;
  }
`

type ArticleCardProps = { 
    article: any
}

const ArticleCard = ({ article }: ArticleCardProps) => {  
  return (
    <CardGroup>
      <img src={article.image.url} width="100%" />
      <Tag color="red">{article.category.name}</Tag>
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <ArticleAuthor article={article} />
    </CardGroup>
  );
};

export default ArticleCard