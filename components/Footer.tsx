import { Button } from 'antd'
import styled from 'styled-components'

const FooterGroup = styled.footer`
  background: #131313;
  padding: 40px 0;
  text-align: center;
`

const LogoGroup = styled.div`
  
`

const IconsGroup = styled.div`
  margin-top: 20px;
  
  a {
    background-color: rgb(68, 68, 68, .8);
    color: #131313;
    
    &:not(:last-child) {
      margin-right: 12px;
    }

    &:hover {
      background-color: #FF9A00;
      color: #131313;
    }
    
  }
  

`

const CopyrightGroup = styled.div`
  p, a {
    text-align: center;
    margin-top: 20px;
    font-weight: 400;
    line-height: 1.5;
    font-size: 12px;
    color: rgb(68, 68, 68, .8);
  }

  a:hover {
    color: white;
  }

`

const Footer = () => (
  <FooterGroup>
    <LogoGroup>
      <img src="/logo-dark.svg" alt="Logo Grimp"/> 
    </LogoGroup>
    <IconsGroup>
      <Button type="link" icon="linkedin" size="small" href="https://linkedin.com" target="_blank" rel="noopener"/>
      <Button type="link" icon="twitter" size="small" href="https://twitter.com" target="_blank" rel="noopener"/>
      <Button type="link" icon="facebook" size="small" href="https://facebook.com" target="_blank" rel="noopener"/>
      <Button type="link" icon="instagram" size="small" href="https://instagram.com/" target="_blank" rel="noopener"/>
    </IconsGroup>
    <CopyrightGroup>
      <p>Copyright © 2020 <a href="https://angulaire.io" target="_blank" rel="noopener">Angulaire</a></p>
    </CopyrightGroup>
  </FooterGroup>
)
export default Footer

