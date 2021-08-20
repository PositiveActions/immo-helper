import styled from "styled-components";

export const CardContainer = styled.div`
    font-size: 8px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: #ced1d3;
`
export const Selection = styled.p`
    margin: 30px 0;
    font-family: 'catamaran-regular';
    font-size: ${({ theme: { fontSizes } }) => fontSizes.semiLarge};
`

export const CardStyle = styled.div`
    width: 350px;
    height: auto;
    padding: 12px;
    display: flex;
    flex-direction: column;
    background-color: white;
    margin: 5vh 30px 5vh 30px;
    border: 1px solid #ebebeb;
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);
    border-radius: ${({ theme: { bordersRadius } }) => bordersRadius.card};
`

export const PlaceholderImage = styled.div`
    width: 100%;
    height: 235px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-color:${({ theme: { colors } }) => colors.mediumGrey};
    border-radius: ${({ theme: { bordersRadius } }) => bordersRadius.card};
`

export const Description = styled.div`
    width:100%;
    height: auto;
    margin: 10px;
`
export const CardDelete = styled.button`
    padding: 8px;
    border: none;
    outline: none;
    color: black;
    cursor: pointer;
    font-size: 1.7rem;
    border-radius: 3px;
    margin: 0 10px 0 0;
    align-items: center;
    transition: all 0.3s;
    transition-duration: 0.4s;
    text-transform: uppercase;
    background-color: #e34a6f;
    border-radius: $border-radius;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    :hover { 
        background-color: #000c20;
        color: #e34a6f;
        zoom: 1.05;
    }
`

export const CardEdit = styled.button`
    padding: 8px;
    border: none;
    outline: none;
    color: black;
    cursor: pointer;
    font-size: 1.7rem;
    border-radius: 3px;
    align-items: center;
    transition: all 0.3s;
    text-transform: uppercase;
    transition-duration: 0.4s;
    background-color: #FCA311;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    :hover { 
        background-color: #000c20;
        color: #FCA311;
        zoom: 1.05;
    }
`

export const CardsButtons = styled.div`
    display: flex;
    justify-content: flex-end ;
    margin-right: 10px;
`