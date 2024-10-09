import styled from "styled-components";

import FOOTERIMG from '../../assets/footer.png'

// FooterSection,
// Text,
// Description,

interface Props {
    fs?: string;
}

export const FooterSection = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 6rem;
    position: relative;
    padding: 70px 0 0 0;
    margin-top: auto; 
    
    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: var(--primary-black);
        z-index: -1;
        clip-path: polygon(0 30%, 100% 0%, 100% 100%, 0 100%);
        background-image: url(${FOOTERIMG});
        background-position: center bottom;
        background-repeat: no-repeat;
    }
`

export const Text = styled.p<Props>`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: ${(props: Props) => props.fs || "24px"};
    line-height: 20px;
    color: var(--primary-white)
`

export const Description = styled.p`
    margin-top: 18px;
    margin-bottom: 72px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: var(--primary-white)
`