import styled from 'styled-components'

const Video = styled.video`
  max-width: 100%;
  vertical-align: middle;
  user-select: none;
`  

const AppPreviewSection: React.FC = () => {

    return (
      <Video autoPlay poster="https://d33wubrfki0l68.cloudfront.net/fee60cc286c167c5d419c4c921ede8cd5ceeb524/b5587/static/images/web/header-video-poster.jpg" src="https://d33wubrfki0l68.cloudfront.net/9ef29be683ebebfd4fb4b25085b6d847dd271149/ff23e/static/images/web/header-video.mp4" loop muted playsInline width="100%" className="Video-sc-1rl5e5m-0 fXsosX" />
    )
  }
export default AppPreviewSection