import React from 'react'
import { Row, Col, Button } from 'antd'
import styled from 'styled-components'

const CardGroup = styled.div`
  margin: 1rem;
`

type ArticleCardProps = { 
    article: any
}

const ArticleCard = ({ article }: ArticleCardProps) => {  
  return (
    <CardGroup>
      <img src={article.image.url} width="100%" />
      <p>{article.title}</p>
    </CardGroup>
  );
};

export default ArticleCard