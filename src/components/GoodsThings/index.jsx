import {
    Page,
    Section,
    Heading,
    CardGrid,
    Card,
    CardDetails,
    JobTag,
    DescriptionText,
    ReadMore,
    Dot
} from './style';

import Slider1 from "../../assets/slider1.png"
import Slider2 from "../../assets/slider2.png"
import Slider3 from "../../assets/slider3.png"

import FlexContainer from "../../utils/FlexContainer"
import { useMemo, useState } from 'react';


const GoodThings = () => {


    const [step, setStep] = useState(0);
    const cards = useMemo(() =>{
        return [
            [
                {
                    img: Slider1,
                    text: 'Organize your daily job enhance your life performance'
                },
                {
                    img: Slider2,
                    text: 'Mark one activity as done makes your brain understands the power of doing.'   
                },
                {
                    img: Slider3,
                    text: 'Careful with missunderstanding the difference between a list of things and a list of desires.'
                },
            ],
            [
                {
                    img: Slider3,
                    text: 'Careful with missunderstanding the difference between a list of things and a list of desires.'
                },
                {
                    img: Slider1,
                    text: 'Organize your daily job enhance your life performance'
                },
                {
                    img: Slider2,
                    text: 'Mark one activity as done makes your brain understands the power of doing.'   
                },
            ],
            [
                {
                    img: Slider2,
                    text: 'Mark one activity as done makes your brain understands the power of doing.'   
                },
                {
                    img: Slider3,
                    text: 'Careful with missunderstanding the difference between a list of things and a list of desires.'
                },
                {
                    img: Slider1,
                    text: 'Organize your daily job enhance your life performance'
                },
            ],
        ]
    }, [])

  return (
    <Page>
        <Section>
            <Heading>good things</Heading>
            <CardGrid>
                {cards[step]?.map((card, idx) => (
                    <Card key={idx}> 
                        <img src={card.img}/>
                        <CardDetails>
                            <JobTag>
                                function
                            </JobTag>

                            <DescriptionText>
                                {card.text}
                            </DescriptionText>

                            <ReadMore>read more</ReadMore>
                        </CardDetails>
                    </Card>
                ))}
            </CardGrid>
            <FlexContainer jc="center" gap={20} mt="33px">
                <Dot onClick={() => setStep(0)} color={!step ? "#4AC959" : ""}/>
                <Dot onClick={() => setStep(1)} color={step === 1 ? "#4AC959" : ""}/>
                <Dot onClick={() => setStep(2)} color={step === 2 ? "#4AC959" : ""}/>
            </FlexContainer>
        </Section>
    </Page>
  )
}

export default GoodThings