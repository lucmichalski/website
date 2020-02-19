import React from 'react';
import { useRouter } from "next/router";
import { Row, Col } from 'antd';
import styled from 'styled-components';
import Query from "../components/Query"; 
import PAGE_QUERY from "../apollo/queries/page/page";
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSideForm from '../components/sections/HeroSideForm';

const Page = () => {

  const router = useRouter();

  return (
    <Query query={PAGE_QUERY} slug={router.query.id} >
      {({ data: { pages } }) => {
        const page = pages[0]
        if (page == undefined) {
          return 404
        } else {
          return (
            <HeroSideForm section={page.content[0]}/>
          );
        }
      }}
    </Query>
  );
};

export default Page; 