import FlexContainer from '../../utils/FlexContainer'

import {
  FooterSection,
  Text,
  Description,
} from './style'
 
const Footer = () => {
  return (
    <FooterSection>
      <FlexContainer dr="column">
        <FlexContainer dr="column" gap={28}>
          <Text>Need help?</Text>
          <Text fs="20px">coopers@coopers.pro</Text>
        </FlexContainer>
        <Description>© 2021 Coopers. All rights reserved.</Description>
      </FlexContainer>
    </FooterSection>
  )
}

export default Footer