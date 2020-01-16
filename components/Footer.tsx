import styled from 'styled-components'

const FooterGroup = styled.footer`
  w
`

const Footer = () => (

  <StyledRow type="flex" justify="center" align="middle">
    <Col xs={{span: 24, order: 1}} md={{span: 10, order: visualOrder, offset: 2}}>
      <VisualGroup>
        <video src="https://d33wubrfki0l68.cloudfront.net/83aa5da8c65153b31d634ceee5fde93f7a35edef/ab42f/static/images/frontpage/workflow-video.mp4" poster="https://d33wubrfki0l68.cloudfront.net/565497a898cc2d44bb6ccf1bb4fe44b6c78c6132/9ce2b/static/images/frontpage/workflow-video-poster.jpg" autoPlay loop muted playsInline width="100%" className="Video-sc-1rl5e5m-0 hDpAwc" />
      </VisualGroup>
    </Col>
    <Col xs={{span: 24, order: 2}} md={{span: 10, order: contentOrder, offset: 2}}>
      <ContentGroup>
        <h2>Simply rapid prototyping.</h2>
        <p>Framer X offers tools to design scroll, link and page interactions. But don’t stop there—add a 3D effect or momentum. Create flows that feel real. And do it all in half the time.</p>
      </ContentGroup> 
    </Col>
  </StyledRow>
)
export default Footer

