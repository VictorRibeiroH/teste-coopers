import { 
  Button, 
  Header, 
  Section, 
  StyledH1, 
  StyledH2, 
  StyledP, 
  ButtonToDo, 
  Main} 
from "./style";

import Logo from "../../assets/Logo.png"
import Hero from "../../assets/Hero.jpg"

const Home = () => {
    return (

        <Main>
          {/* Nav */}
            <Header>
                <img src={Logo} alt="Coopers Logo"/>
                <Button>entrar</Button>
            </Header>

          {/* Hero */}
            <Section>
                <article>
                    <header>
                        <StyledH1>Organize</StyledH1>
                        <StyledH2>your daily jobs</StyledH2>
                    </header>

                    <StyledP>The only way to get things done</StyledP>   
                    <ButtonToDo>Go to To-do list</ButtonToDo>

                </article>

                {/* HeroIMG */}
                <figure>
                    <img src={Hero} alt="HeroImage" style={{width: "100%"}}/>
                </figure>
            </Section>

        </Main>
    )
}

export default Home;
