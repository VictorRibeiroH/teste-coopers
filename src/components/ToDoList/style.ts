import styled from "styled-components";

import BG1 from '../../assets/bg1.png'

// MainContainer,
// TaskSection,
// TaskTitle,
// TaskDescription

export const MainContainer = styled.main`
    width: 100%;
    position: relative;

    
`

export const TaskTitle = styled.h1`
    font-family: 'Poppins';
    color: var(--primary-white);
    font-weight: 600;
    font-size: 3.75rem;
    line-height: 100%;
    width: max-content;
    margin: 0 auto;
    border-bottom: 2px solid var(--primary-green);

    @media (max-width: 1159px) {
        font-size: 2.4rem;
}
`

export const TaskDescription = styled.p`
    font-family: 'Montserrat';
    color: var(--primary-white);
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1.8rem;
    text-align: center;
    max-width: 37.5rem;
    margin: 2.5rem auto 0;


    @media (max-width: 1159px) {
        font-size: 1rem;
}
`

export const TaskSection = styled.section`
    position: relative;
    width: 100%;
    min-height: 26rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &::before {
        content: '';
        position: absolute;
        width: 100%;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        z-index: -1;
        background-image: url(${BG1});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
 }
`