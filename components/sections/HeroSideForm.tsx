import React from 'react';
import { Row, Col, Button } from 'antd';
import styled from 'styled-components';
import Header from '../Header';
import Footer from '../Footer';
import { Markdown } from 'react-showdown';
import WhitePaperForm from '../forms/WhitePaperForm'

const Hero = styled.section`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: start;
  position: relative;
  height: 50vh;
  background: url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1526&q=80) no-repeat center center;
  background-size: cover;

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
  padding: 0 80px;
  position: relative;
  z-index: 2;

  h1 {
    color: white;
  }

`

const FormGroup = styled.div`
  @media only screen and (min-width: 768px) {
    right: 80px;
  }
  margin: 0 20px;
  margin-top: -200px;
  padding: 24px;
  background: ${props => props.theme.bg.primary};
  border: 1px solid ${props => props.theme.bg.borderDarkOnly};
  box-shadow: ${props => props.theme.bg.shadowLightOnly};
  position: absolute;
  border-radius: 8px;
`

const StyledRow = styled(Row)`
  @media only screen and (min-width: 768px) {
    right: 80px;
    padding 0 80px;
    height: 50vh;
  }
  height: 70vh;
  padding: 10rem 20px 0;
`

type HeroSideFormProps = {
  section: {
    title: string;
    headline: string;
    content: any
  }
}

const HeroSideForm = ({ section }: HeroSideFormProps) => {
  return (
    <>
      <Header afterScroll defaultTheme="light" showNav={false} showActions={false}/>
      <Hero>
        <HeadingGroup>
          <h1>{section.title}</h1>
          <p>{section.headline}</p>
        </HeadingGroup>
      </Hero>
      <FormGroup>
        <WhitePaperForm />
      </FormGroup>
      <StyledRow type="flex" justify="start" align="middle">
        <Col xs={22} md={14}>
          <Markdown markup={section.content} />
        </Col>
      </StyledRow>
      <Footer/>
    </>
  )
}

export default HeroSideForm