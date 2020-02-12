import React from 'react';
import { useRouter } from "next/router";
import { Row, Col, Button, Tag, Avatar} from 'antd';
import styled from 'styled-components';
import Query from "../../components/query"; 
import ARTICLE_QUERY from "../../apollo/queries/article/article";
import CentralLayout from '../../layouts/Central';
import ReactMarkdown from "react-markdown";
import ArticleAuthor from '../../components/ArticleAuthor';

const Article = () => {
  const router = useRouter();
  return (
    <Query query={ARTICLE_QUERY} id={router.query.id}>
      {({ data: { article } }) => {
        return (
          <>
            <CentralLayout>
              <Tag color="red">{article.category.name}</Tag>
              <h1>{article.title}</h1>
              <p>{article.description}</p>
              <ArticleAuthor article={article} />
            </CentralLayout>
            <img src={article.image.url} width="100%"/>
            <CentralLayout>
              <ReactMarkdown source={article.content} />
            </CentralLayout>
          </>
        );
      }}
    </Query>
  );
};

export default Article; 