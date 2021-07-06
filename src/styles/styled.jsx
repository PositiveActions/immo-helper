import styled from "styled-components";

export const Container = styled.div`
    color: ${({ theme: { colors } }) => colors.white};
`;

export const Button = styled.button`
    border: none;
    min-width: 180px;
    height: 40px;
    color: ${({ theme: { colors } }) => colors.darkBlue};
    background-color:${({ theme: { colors } }) => colors.yellow};
    border-radius: ${({ theme: { bordersRadius } }) => bordersRadius.button};
    font-size: ${({ theme: { fontSizes } }) => fontSizes.medium};
`
export const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 25px;
    width: 500px;
    height: 500px;
    border-radius: ${({ theme: { bordersRadius } }) => bordersRadius.card};
    background-color:${({ theme: { colors } }) => colors.white};
    box-shadow: ${({theme: { boxShadows } }) => boxShadows.modal};
`

