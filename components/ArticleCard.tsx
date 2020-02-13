import React from 'react'
import { Row, Col, Tag } from 'antd'
import styled from 'styled-components'
import ArticleAuthor from './ArticleAuthor'
import Link from 'next/link'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const CardGroup = styled.article`
  margin: 2rem;

  h2 {
    font-size: 21px;
    margin: 20px 0;
  }
  p {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

const ImageGroup = styled.div`
  margin-bottom: 12px;
  img {
    height: 16rem;
    width: 100%;
    object-fit: cover;
  }
`

type ArticleCardProps = { 
    article: any
}

const ArticleCard = ({ article }: ArticleCardProps) => {  
  return (
    <CardGroup>
      <Link href={'/blog/[id]'} as={`/blog/${article.slug}`}>
        <a>
          <ImageGroup>
          <LazyLoadImage src={article.image.url} alt="SEO to do" effect="blur"/>
          </ImageGroup>
          <Tag color="red">{article.category.name}</Tag>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <ArticleAuthor article={article} />
        </a>
      </Link>
    </CardGroup>
  );
};

export default ArticleCard