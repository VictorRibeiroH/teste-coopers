import styled from "styled-components";

import HeroIMG from "../../assets/bg.png";


// Nav
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding: 30px 80px 55px;
  background: transparent;
  
  @media (max-width: 540px) {
    padding: 30px 5% 55px;
  }
`;

export const Button = styled.button`
  font-family: 'Poppins';
  background: var(--primary-black);
  width: 120px;
  height: 40px;
  color: white;
  border: none;
  cursor: pointer;
`;


// Hero

export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 80px 55px;
  gap: 10px;
  flex-wrap: wrap;
  
  @media (max-width: 540px) {
    padding: 30px 5% 55px;
  }
`;


// Hero IMG
export const Main = styled.div`

  position: relative;
  overflow: hidden;

  @media (min-width: 1160px) {
    background-image: url(${HeroIMG});
    background-repeat: no-repeat;
    background-position: calc(100% + 30px) center;
  }
  `


// Hero texts
export const StyledH1 = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 80px;
  line-height: 80%;
  margin-bottom: 20px;
  color: var(--primary-black);
`;

export const StyledH2 = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 61px;
  line-height: 80%;
  margin-top: 5px;
  color: var(--primary-green);
`;

export const StyledP = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 100%;
  color: var(--primary-black);
  margin-top: 56px;
  margin-bottom: 61px;
`;


// Btn ToDo
export const ButtonToDo = styled.button`
  border: none;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: #FFFFFF;
  background: var(--primary-green);
  border-radius: 10px;
  width: 300px;
  height: 64px;
`;
