import styled from "styled-components";

export const ModalBackground = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.7);
`
export const ModalContainer = styled.div`
    display: flex;
    width: 100vh;
    padding: 25px;
    flex-direction: column;
    justify-content: center;
    box-shadow: ${({ theme: { boxShadows } }) => boxShadows.modal};
    background-color:${({ theme: { colors } }) => colors.mediumGrey};
    border-radius: ${({ theme: { bordersRadius } }) => bordersRadius.modal};
`;

export const ModalTitle = styled.h1`
    display: inline-block;
    font-size: 2rem;
    margin-top: 10px;
    text-align: center;
    font-family: 'catamaran-semiBold';
    color: ${({ theme: { colors } }) => colors.darkBlue};
`
export const Label = styled.label`
    line-height: 2;
    display: block;
    text-align: left;
    font-weight: 200;
    font-size: 1.5rem;
    font-family: 'catamaran-regular';
    color: ${({ theme: { colors } }) => colors.darkBlue};
`
export const CloseModalButton = styled.button`
    border: none;
    display: flex;
    color: black;
    cursor: pointer;
    font-size: 2rem;
    justify-content: flex-end;
    background-color: transparent;
`
export const Form = styled.form`
    color: black;
    grid-gap: 20px;
    margin : 40px;
    display: flex;
    display: grid;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    grid-template-columns: 2fr 2fr;
`
export const ButtonFormContainer = styled.div`
    display: flex;
    justify-content: center;
`;
export const LabelCheckbox = styled(Label)`
    display: flex;
    align-items: center;
    text-indent: 70px;
    margin-left: -75px;
`;
