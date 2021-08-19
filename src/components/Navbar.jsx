import React from 'react';
import styled from 'styled-components';
import logo from '../logo_size.jpg'

const BarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
    position: sticky; top: 0;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.large};
    font-family: ${({ theme: { fonts } }) => fonts[3]};
    background-color: #003459;
    color: #f0efeb;
`
const ButtonExport = styled.button`
    border: none;
    height: 30px;
    width: 100px;
    color: ${({ theme: { colors } }) => colors.darkBlue};
    background-color:${({ theme: { colors } }) => colors.yellow};
    border-radius: ${({ theme: { bordersRadius } }) => bordersRadius.button};
    color: ${({ theme: { colors } }) => colors.darkBlue};
`
const Image = styled.img`
    /* mix-blend-mode: multiply; */
`

function Navbar() {
    return (
        <BarContainer>
            <Image src={logo}  alt="logo immo-helper" />
            <ButtonExport>Exporter</ButtonExport>
        </BarContainer>
    );
}

export default Navbar;