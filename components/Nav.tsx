import React from "react";
import { Button } from 'antd'
import Link from "next/link"
import styled from 'styled-components' 

const NavGroup = styled.nav`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  
  &.HeaderOff {
    display: none;
  }

  @media (min-width: 768px) { 
    padding: 0px 80px;
  }
  
`

const Nav = () => {  
  return (
    <NavGroup>
      <Link href={'/jobs/index'} as="/jobs">
        <Button type="link">Trouver un Job</Button>
      </Link>
      <Link href={'/blog/index'} as="/blog">
        <Button type="link">Blog</Button>
      </Link>
    </NavGroup>
  );
};

export default Nav; 