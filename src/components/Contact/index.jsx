import {
    Page,
    Box,
    Avatar,
    Label,
    Input,
    Textarea,
    SendButton
} from './style'

// import emailjs from 'emailjs-com';

import Image from '../../assets/image.png'
import Send from '../../assets/getInTouch.png'
import FlexContainer from '../../utils/FlexContainer';

const Contact = () => {
  return (
  <Page>
    <Box>
        <Avatar>
            <img src={Image} alt="IMG"/>
        </Avatar>
        <FlexContainer>
            <img src={Send} alt="Send Message"/>
        </FlexContainer>
        <form>
            <div>
                <Label htmlFor="name" mt="40px">Your name</Label>
                <Input id="name" placeholder="type your name here..."/>
            </div>

            <FlexContainer jc="space-between" gap={24} style={{ flexDirection: 'row' }}>
                <div style={{ width: "48%" }}>
                    <Label htmlFor="email" mt="24px">Email*</Label>
                    <Input id="email" type="email" placeholder="example@example.com" />
                </div>
                <div style={{ width: "48%" }}>
                    <Label htmlFor="telephone" mt="24px">Telephone*</Label>
                    <Input id="telephone" type="tel" placeholder="example@example.com" />
                </div>
            </FlexContainer>
            <div>
                <Label mt="24px">Message*</Label>
                <Textarea placeholder="Type what you want to say to us">

                </Textarea>
            </div>
            
            <SendButton type="submit">
                Send now
            </SendButton>
        </form>
    </Box>
  </Page>
  )
}

export default Contact