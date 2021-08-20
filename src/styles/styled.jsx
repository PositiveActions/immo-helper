import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Header = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(/images/whiteAppartment.png);
`;

export const Description = styled.div`
    padding: 30px;
    text-shadow:  1px 1px 2px #fff;
    color: ${({ theme: { colors } }) => colors.darkBlue};
    font-size: ${({ theme: { fontSizes } }) => fontSizes.medium};

    ${media.lessThan("medium")`
    font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
    `}
`;

export const H1 = styled.h1`
    margin-bottom: 15px;
    font-family: 'catamaran-regular';
    font-size: ${({ theme: { fontSizes } }) => fontSizes.large};

    ${media.lessThan("medium")`
        font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
    `}
    ${media.between("medium", "large")`
        font-size: ${({ theme: { fontSizes } }) => fontSizes.medium};
    `}
`;

export const H2 = styled.h2`
    color: #fff;
    text-align: center;
    padding:45px 0 45px 0;
    text-transform: uppercase;
    font-family: 'catamaran-regular';
    border-bottom: 1px solid #fff;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.medium};
    background-color: ${({ theme: { colors } }) => colors.darkBlue};
`

export const Pdescription = styled.p`
    font-size: 1.1em;
    font-family: 'catamaran-regular';
    
    ${media.lessThan("medium")`
        font-size: 1em;
    `}
    ${media.lessThan("small")`
        font-size: 0.8em;
    `}
`

export const P = styled.p`
    margin: 8px 0;
    font-size: 1em;
    font-family: 'catamaran-light';
    
    ${media.lessThan("medium")`
        font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
    `}
    ${media.greaterThan("medium")`
        font-size: ${({ theme: { fontSizes } }) => fontSizes.medium};
    `}
`;

export const Span = styled.span`
    font-family: 'catamaran-regular';
    color: ${({ theme: { colors } }) => colors.darkBlue};
`

export const Button = styled.button`
    border: none;
    height: 38px;
    width: 120px;
    margin-top: 15px;
    font-family: 'catamaran-semibold';
    color: ${({ theme: { colors } }) => colors.deepBlue};
    font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
    background-color:${({ theme: { colors } }) => colors.yellow};
    border-radius: ${({ theme: { bordersRadius } }) => bordersRadius.button};
`;


