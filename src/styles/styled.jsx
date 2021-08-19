import styled from "styled-components";
import media, { pxToRem } from "styled-media-query";

const customMedia = pxToRem(
    {
        xs: "576px",
        sm: "768px",
        md: "992px",
        lg: "1240px"
    },
    10
);

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    background-image: url(/images/kara.jpg);
    background-repeat: no-repeat;
    background-position: center ;
    background-size: cover;
`;

export const Description = styled.div`
    color:  #003459;
    text-shadow:  1px 1px 2px #fff;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.medium};
    padding: 30px;
    ${media.lessThan("medium")`
        font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
    `}
    ${media.between("medium", "large")`
        font-size: ${({ theme: { fontSizes } }) => fontSizes.medium};
    `}
`;

export const H1 = styled.h1`
    font-size: ${({ theme: { fontSizes } }) => fontSizes.large};
    margin-bottom: 20px;
    ${media.lessThan("medium")`
        font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
    `}
    ${media.between("medium", "large")`
        font-size: ${({ theme: { fontSizes } }) => fontSizes.medium};
    `}
    ${media.greaterThan("large")`
        font-size: ${({ theme: { fontSizes } }) => fontSizes.large};
    `}
`;

export const P = styled.p`
    font-size: ${({ theme: { fontSizes } }) => fontSizes.medium};
    ${media.lessThan("medium")`
        font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
    `}
`;

export const Button = styled.button`
    margin-top: 30px;
    border: none;
    height: 30px;
    width: 200px;
    color: ${({ theme: { colors } }) => colors.darkBlue};
    background-color:${({ theme: { colors } }) => colors.yellow};
    border-radius: ${({ theme: { bordersRadius } }) => bordersRadius.button};
    font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
`;

//////////// MODAL /////////////

export const ModalBackground = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: rgba(200, 200, 200);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 25px;
    width: 100vh;
    border-radius: ${({ theme: { bordersRadius } }) => bordersRadius.modal};
    background-color:${({ theme: { colors } }) => colors.mediumGrey};
    box-shadow: ${({ theme: { boxShadows } }) => boxShadows.modal};
`;
