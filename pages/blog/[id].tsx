import React from 'react';
import { useRouter } from "next/router";
import { Row, Col, Button, Tag, Avatar} from 'antd';
import styled from 'styled-components';
import Query from "../../components/query"; 
import ARTICLE_QUERY from "../../apollo/queries/article/article";
import CentralLayout from '../../layouts/Central';
import ReactMarkdown from "react-markdown";

const AvatarGroup = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
`

const AvatarDetails = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: left;
  -webkit-box-align: left;
  -ms-flex-align: left;
  align-items: left;
  justify-content: flex-start;
  flex-direction: column;

  margin-left: 12px;

  p {
    margin-bottom: 0;
    font-size: 14px;
  }
`

const Article = () => {
  const router = useRouter();
  const readingTime = require('reading-time');
  return (
    <Query query={ARTICLE_QUERY} id={router.query.id}>
      {({ data: { article } }) => {
        return (
          <>
            <CentralLayout>
              {console.log(article)}
              <Tag color="red">{article.category.name}</Tag>
              <h1>{article.title}</h1>
              <p>{article.description}</p>
              <AvatarGroup>
                <Avatar src={article.user.avatar.url} size="large"/>
                <AvatarDetails>
                  <p>{article.user.username}</p>
                  <p>{`${new Date(article.published_at).toLocaleDateString("fr-FR")} - ${Math.ceil(readingTime(article.content).minutes)} min`}</p>
                </AvatarDetails>
              </AvatarGroup>
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