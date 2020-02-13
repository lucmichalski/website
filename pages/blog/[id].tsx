import React from 'react';
import { useRouter } from "next/router";
import { NextSeo } from 'next-seo';
import { Row, Col, Button, Tag, Avatar} from 'antd';
import styled from 'styled-components';
import Query from "../../components/Query"; 
import ARTICLE_QUERY from "../../apollo/queries/article/article";
import CentralLayout from '../../layouts/Central';
import ReactMarkdown from "react-markdown";
import ArticleAuthor from '../../components/ArticleAuthor';

const Article = () => {
  const router = useRouter();
  return (
    <Query query={ARTICLE_QUERY} slug={router.query.id} >
      {({ data: { articles } }) => {
        const article = articles[0]
        return (
          <>
            <NextSeo
              title={article.title}
              description={article.description}
              canonical={`https://kernn.io/blog/${article.slug}`}
              openGraph={{
                title: article.title,
                description: article.description,
                url: `https://kernn.io/blog/${article.slug}`,
                type: 'article',
                article: {
                  publishedTime: article.published_at,
                  modifiedTime: '2018-01-21T18:04:43Z',
                  expirationTime: '2022-12-21T22:04:11Z',
                  authors: [
                    `https://www.kernn.io/authors/${article.user.username}`,
                  ],
                  tags: [article.category.name],
                },
                images: [
                  {
                    url: article.image.url,
                    width: 850,
                    height: 650,
                    alt: 'Photo of text',
                  },
                ],
              }}
            />
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