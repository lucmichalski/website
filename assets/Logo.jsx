import React, { Component } from 'react'
import styled from 'styled-components'

const LogoMode = styled.svg`
  path {
    fill: ${props => props.theme.text.primary};
  }
`

class Logo extends React.Component {
  render () {
    return (
      <LogoMode width={this.props.width} height={this.props.height} viewBox="0 0 93 24" xmlns="http://www.w3.org/2000/svg">
        <title id="kernn-logo">Grimp</title>
        <rect id="Rectangle" fill="#FF4961" x="85.9170082" y="16.6577153" width="6.57479508" height="6.6035943" rx="0.36686635"></rect>
        <path d="M16.0722295,6.69729395 L10.7634477,14.2694154 L16.5120102,23.2613096 L10.3550799,23.2613096 L5.73738217,15.5314357 L5.73738217,23.2613096 L0.49142623,23.2613096 L0.49142623,0.450293741 L5.73738217,0.450293741 L5.73738217,13.3544507 L10.1980154,6.69729395 L16.0722295,6.69729395 Z M33.3612552,16.3517488 L22.5552142,16.3517488 C22.6180403,17.1089647 22.9792852,17.7557437 23.6389596,18.2921049 C24.298634,18.8284662 25.0996552,19.0966428 26.0420472,19.0966428 C26.900671,19.0966428 27.6283962,18.9020833 28.2252444,18.5129585 C28.8220927,18.1238336 29.2461627,17.7294562 29.4974673,17.3298145 L32.9528874,20.0116075 C32.5759306,20.7898572 31.7801448,21.5943871 30.5655062,22.4252212 C29.3508676,23.2560554 27.8116504,23.6714662 25.9478085,23.6714662 C23.2881688,23.6714662 21.1625832,22.8564196 19.5709878,21.226302 C17.9793924,19.5961844 17.1836066,17.5296469 17.1836066,15.0266276 C17.1836066,12.544642 17.9375089,10.4675878 19.4453361,8.7954026 C20.9531633,7.12321742 22.9007443,6.28713737 25.2881374,6.28713737 C27.8849509,6.28713737 29.8848862,7.0811505 31.2880031,8.66920058 C32.6911201,10.2572507 33.3926681,12.4710224 33.3926681,15.3105821 C33.3926681,15.7522914 33.3821972,16.0993435 33.3612552,16.3517488 Z M27.2671507,11.2721173 C26.8064257,10.7883405 26.1781738,10.5464557 25.3823761,10.5464557 C24.5865784,10.5464557 23.9583265,10.7935989 23.4976015,11.2878926 C23.0368765,11.7821863 22.7751049,12.3553481 22.7122788,13.0073952 L28.0524734,13.0073952 C28.0105893,12.3132806 27.7488177,11.7348604 27.2671507,11.2721173 Z M44.9331313,6.28713737 L44.9331313,11.6507234 C44.6399427,11.6086559 44.3572293,11.5876224 44.0849827,11.5876224 C41.8232419,11.5876224 40.6923885,13.0389312 40.6923885,15.9415922 L40.6923885,23.2613096 L35.4464325,23.2613096 L35.4464325,6.69729395 L40.5667368,6.69729395 L40.5667368,8.90582937 C41.4253606,7.16002597 42.8808109,6.28713737 44.9331313,6.28713737 Z M56.6620719,23.2613096 L56.6620719,13.3860012 C56.6620719,12.6287853 56.4631255,12.0451068 56.0652266,11.6349482 C55.6673278,11.2247895 55.1437845,11.0197133 54.4945811,11.0197133 C53.7825516,11.0197133 53.2275958,11.2405646 52.8296969,11.6822739 C52.4317981,12.1239832 52.2328516,12.6918866 52.2328516,13.3860012 L52.2328516,23.2613096 L46.9868957,23.2613096 L46.9868957,6.69729395 L52.1072,6.69729395 L52.1072,8.40102128 C52.4632148,7.83310933 53.0076998,7.33882301 53.7406713,6.91814749 C54.4736429,6.49747197 55.3113121,6.28713737 56.2537041,6.28713737 C57.2379802,6.28713737 58.0913557,6.45540505 58.8138563,6.79194547 C59.5363568,7.12848588 60.0913126,7.54389672 60.4787405,8.03819046 C60.8661683,8.53248419 61.1698234,9.15297127 61.3897149,9.89967032 C61.6096063,10.6463694 61.750963,11.3299568 61.8137891,11.9504532 C61.8766153,12.5709496 61.9080279,13.2808289 61.9080279,14.0801124 L61.9080279,23.2613096 L56.6620719,23.2613096 Z M74.4222913,23.2613096 L74.4222913,13.3860012 C74.4222913,12.6287853 74.2233448,12.0451068 73.825446,11.6349482 C73.4275471,11.2247895 72.9040039,11.0197133 72.2548005,11.0197133 C71.542771,11.0197133 70.9878151,11.2405646 70.5899163,11.6822739 C70.1920174,12.1239832 69.993071,12.6918866 69.993071,13.3860012 L69.993071,23.2613096 L64.747115,23.2613096 L64.747115,6.69729395 L69.8674193,6.69729395 L69.8674193,8.40102128 C70.2234341,7.83310933 70.7679191,7.33882301 71.5008906,6.91814749 C72.2338622,6.49747197 73.0715314,6.28713737 74.0139234,6.28713737 C74.9981995,6.28713737 75.851575,6.45540505 76.5740756,6.79194547 C77.2965761,7.12848588 77.851532,7.54389672 78.2389598,8.03819046 C78.6263876,8.53248419 78.9300427,9.15297127 79.1499342,9.89967032 C79.3698257,10.6463694 79.5111823,11.3299568 79.5740085,11.9504532 C79.6368346,12.5709496 79.6682472,13.2808289 79.6682472,14.0801124 L79.6682472,23.2613096 L74.4222913,23.2613096 Z" id="kernn" fill="#242B4F"></path>
      </LogoMode>
    )
  }
}

Logo.defaultProps = {
  width: '93px',
  height: '24px'
};

export default Logo