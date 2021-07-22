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
    margin-right: auto;
    margin-left: auto;
    padding: 2rem;
    /* ${media.greaterThan(customMedia.xs)`
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
    `} */
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

export const P = styled.p`
    margin: 0 20px;
    font-family: ${({ theme: { fonts } }) => fonts[2]};
    font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
    margin-right: 70px;
`
export const A = styled.a`
    text-decoration: none;
    color: #000;
    margin: 0 20px;
    font-family: ${({ theme: { fonts } }) => fonts[2]};
    ::visited { 
        color: #000;
    }
    ::hover { 
        color: #000;
    }
`
////////////// CARD STYLE ////////////// 

export const CardContainer = styled.div`
    background-color: #fff;
    position: relative;
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.356);
    display: grid;
    grid-template-columns: 350px 600px;
    margin: 40px; 
    border-radius: ${({ theme: { bordersRadius } }) => bordersRadius.card};
    
    /* position: relative;
    display: flex;
    flex-direction: column;
    font-family: ${({ theme: { fonts } }) => fonts[3]};
    color: ${({ theme: { colors } }) => colors.black};
    background-color: ${({ theme: { colors } }) => colors.white};
    box-shadow: ${({ theme: { boxShadows } }) => boxShadows.card};
    margin-bottom: 2rem;
    min-height: 250px;
    margin: 20px; */
`;

export const CardPic = styled.div`
    background: #dfe6eb;
    color: #8896a0;
    display: flex;
    flex: 1 1 100%;
    min-height: 250px;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    width: 350px;
    height: 350px;
    border-radius: ${({ theme: { bordersRadius } }) => bordersRadius.card};
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
    justify-content: flex-end;
    margin-top: 10px;
    align-items: center;
    ${media.greaterThan("375px")`
        flex-direction: row;
    `}
`;

export const CardButtonEdit = styled.button`
  position: absolute;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  background-color: #afc1d6;
  color: $primary-color;
  padding: 10px 15px;
  text-transform: uppercase;
  border-radius: $border-radius;
  cursor: pointer;
  /* box-shadow: 0 10px 20px rgba(0, 0, 0, 0.294); */
  margin-left: 5px;
  margin-top: 80px;
`

export const CardButton = styled.button`
  position: absolute;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  background-color: #e34a6f;
  color: $primary-color;
  padding: 10px 15px;
  text-transform: uppercase;
  border-radius: $border-radius;
  cursor: pointer;
  /* box-shadow: 0 10px 20px rgba(0, 0, 0, 0.294); */
  margin-left: 5px;
`

//////////// MODAL /////////////

export const Button = styled.button`
    margin-right: auto;
    margin-left: auto;
    border: none;
    height: 30px;
    width: 200px;
    color: ${({ theme: { colors } }) => colors.darkBlue};
    background-color:${({ theme: { colors } }) => colors.yellow};
    border-radius: ${({ theme: { bordersRadius } }) => bordersRadius.button};
    font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
`;

export const ModalBackground = styled.div`
    height: 100vh;
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
    /* border-radius: ${({ theme: { bordersRadius } }) => bordersRadius.card}; */
    background-color:${({ theme: { colors } }) => colors.cadetGrey};
    box-shadow: ${({ theme: { boxShadows } }) => boxShadows.modal};
`;
