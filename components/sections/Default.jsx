import { Row, Col, Button } from 'antd';
import styled from 'styled-components';

const SectionGroup = styled(Row)`
  
`
  


const Section = (children) => {  
  return (
    <SectionGroup as="section" type="flex" justify="start" align="middle">
      {children}
    </SectionGroup>
  )
}

export default Section