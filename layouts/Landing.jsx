import React from "react";
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'
import defaultPage from "../hocs/defaultPage";

const Content = styled.main`
  padding: 0 20px 20px;

  @media (min-width: 768px) { 
    padding: 0px 40px 20px;
  }

`;

class Layout extends React.Component {

  constructor(props) {
    super(props);
  }
  static async getInitialProps({ req }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps, isAuthenticated };
  }

  render() {
    const { isAuthenticated, children } = this.props;
    console.log(isAuthenticated)
    return (
      <div>
        <Header afterScroll={true} />
        <Content>
          { children }
        </Content>
        <Footer />
      </div>
    )
  }
}

export default defaultPage(Layout);