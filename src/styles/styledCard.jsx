import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    font-size: 8px;
    background-color: #ced1d3;
`

export const CardStyle = styled.div`
    width: 350px;
    height: auto;
    padding: 12px;
    background-color: white;
    margin: 5vh 30px 5vh 30px;
    border: 1px solid #ebebeb;
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    border-radius: ${({ theme: { bordersRadius } }) => bordersRadius.card};
`

export const PlaceholderImage = styled.div`
    width: 100%;
    height: 235px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: space-between;
    justify-content: center;
    background-color:${({ theme: { colors } }) => colors.mediumGrey};
    border-radius: ${({ theme: { bordersRadius } }) => bordersRadius.card};
`

export const Description = styled.div`
    width:100%;
    height: auto;
    margin: 10px;
`
export const CardDelete = styled.button`
    margin: 0 10px 0 0;
    border: none;
    outline: none;
    align-items: center;
    color: black;
    background-color: #e34a6f;
    padding: 8px;
    text-transform: uppercase;
    border-radius: $border-radius;
    cursor: pointer;
    font-size: 1.7rem;
    transition-duration: 0.4s;
    border-radius: 3px;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
    :hover { 
        background-color: #000c20;
        color: #e34a6f;
        zoom: 1.05;
    }
`

export const CardEdit = styled.button`
    border: none;
    outline: none;
    align-items: center;
    background-color: #FCA311;
    color: black;
    padding: 8px;
    text-transform: uppercase;
    cursor: pointer;
    font-size: 1.7rem;
    transition-duration: 0.4s;
    border-radius: 3px;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
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