import styled from "styled-components";

export const ModalTitle = styled.h1`
    display: inline-block;
    text-align: center;
    margin-top: 10px;
    color: ${({ theme: { colors } }) => colors.darkBlue};
    font-family: ${({ theme: { fonts } }) => fonts[3]};
    font-size: 2rem;
`
export const Label = styled.label`
    line-height: 2;
    text-align: left;
    display: block;
    color: ${({ theme: { colors } }) => colors.darkBlue};
    font-family: ${({ theme: { fonts } }) => fonts[3]};
    font-size: 1.5rem;
    font-weight: 200;
`
export const CloseModalButton = styled.button`
    display: flex;
    justify-content: flex-end;
    background-color: transparent;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    color: black;
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    color: black;
    display: grid;
    grid-template-columns: 2fr 2fr;
    grid-gap: 20px;
    margin : 40px;
`