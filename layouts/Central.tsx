import React from 'react';
import styled from 'styled-components'

const Content = styled.main`
  padding: 0 20px 20px;
  p {
    text-align: justify;
  }

  @media (min-width: 768px) { 
    padding: 0px 200px 20px;
  }

`;

class CentralLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Content>
        { children }
      </Content>
    )
  }
}

export default CentralLayout;