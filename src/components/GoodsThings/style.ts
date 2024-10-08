import styled from "styled-components";

import BG2 from '../../assets/bg2.png'

interface DotProps {
    color?: string;
}

export const Page = styled.div`
  padding: 0 80px 55px;
  display: flex;
  gap: 41px;
  background-image: url(${BG2});
  background-repeat: no-repeat;
  background-position-x: 80px;
  @media (max-width: 540px) {
    padding: 30px 5% 55px;
    background-position-x: 5%;
  }
`;

export const Section = styled.div`
  padding: 80px 0 0 80px;
  @media (max-width: 540px) {
    padding-left: 0;
  }
`;

export const Heading = styled.h2`
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 48px;
  color: #FFFFFF;
`;

export const CardGrid = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 40px;
`;

export const Card = styled.div`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  width: 360px;
  box-shadow: 0px 4px 60px rgba(66, 66, 66, 0.2);
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

export const CardDetails = styled.div`
  padding: 23px 32px;
`;

export const JobTag = styled.span`
  font-family: 'Soleil';
  font-weight: 400;
  font-size: 16px;
  border: 1px solid #9499B3;
  border-radius: 16px;
  color: #9499B3;
  padding: 6px 12px;
`;

export const DescriptionText = styled.p`
  margin: 16px 0 68px;
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 18px;
  color: #312F4F;
`;

export const ReadMore = styled.a`
  font-family: 'Soleil';
  font-weight: 700;
  font-size: 16px;
  color: #42D76B;
  cursor: pointer;
`;

export const Dot = styled.div<DotProps>`
  background: ${(props) => props.color || "#C4C4C4"};
  width: 29px;
  height: 29px;
  border-radius: 50%;
`;