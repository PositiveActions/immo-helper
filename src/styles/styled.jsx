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
    margin-right: auto;
    margin-left: auto;
    padding-right: 2rem;
    padding-left: 2rem;

    ${media.greaterThan(customMedia.xs)`
        width: 536px;
    `}
    ${media.greaterThan(customMedia.sm)`
        width: 728px;
    `}
    ${media.greaterThan(customMedia.md)`
        width: 952px;
    `}
    ${media.greaterThan(customMedia.lg)`
        width: 1100px;
    `}
`;

export const H1 = styled.h1`
    color: ${({ theme: { colors } }) => colors.white};
    font-size: ${({ theme: { fontSizes } }) => fontSizes.large};
`;

export const H2 = styled.h2`
    color: ${({ theme: { colors } }) => colors.white};
    font-size: ${({ theme: { fontSizes } }) => fontSizes.medium};
`

export const Row = styled.div`
    display: flex;
    box-sizing: border-box;
    flex-direction: row;
    padding: 1rem 0;
    flex: 0 1 100%;
`;

export const Section = styled.section`
    display: block;
    margin: 0 auto;
`;


////////////// CARD STYLE ////////////// 

export const CardContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    font-family: ${({ theme: { fonts } }) => fonts[3]};
    color: ${({ theme: { colors } }) => colors.black};
    background-color: ${({ theme: { colors } }) => colors.white};
    box-shadow: ${({ theme: { boxShadows } }) => boxShadows.card};
    border-radius: ${({ theme: { bordersRadius } }) => bordersRadius.card};
    margin-bottom: 2rem;
    min-height: 250px;
    margin: 20px;
`;

export const CardPic = styled.div`
    background: #dfe6eb;
    color: #8896a0;
    display: flex;
    flex: 1 1 100%;
    min-height: 250px;
    justify-content: flex-start;
    align-items: center;
    border-top-left-radius: ${({ theme: { bordersRadius } }) => bordersRadius.card};
    border-top-right-radius: ${({ theme: { bordersRadius } }) => bordersRadius.card};
    position: relative;
`;

export const PreviewImage = styled.div`
    border-top-left-radius: ${({ theme: { bordersRadius } }) => bordersRadius.card};
    border-top-right-radius: ${({ theme: { bordersRadius } }) => bordersRadius.card};
    background-image:${props => `url(${props.img})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
`;

export const CardWrapper = styled.div`
    padding: 2.5rem 2rem;
    flex: 1 1 auto;
    justify-content: flex-start;
`;

export const CardHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 1rem 0;
`;

export const CardFooter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
    ${media.greaterThan("375px")`
        flex-direction: row;
    `}
`;


//////////// MODAL /////////////


export const Button = styled.button`
    border: none;
    min-width: 180px;
    height: 40px;
    color: ${({ theme: { colors } }) => colors.darkBlue};
    background-color:${({ theme: { colors } }) => colors.yellow};
    border-radius: ${({ theme: { bordersRadius } }) => bordersRadius.button};
    font-size: ${({ theme: { fontSizes } }) => fontSizes.medium};
`;

export const ModalBackground = styled.div`
    width: 100vh;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 25px;
    width: 100vh;
    border-radius: ${({ theme: { bordersRadius } }) => bordersRadius.card};
    background-color:${({ theme: { colors } }) => colors.cadetGrey};
    box-shadow: ${({ theme: { boxShadows } }) => boxShadows.modal};
`;
