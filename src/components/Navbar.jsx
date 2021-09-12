import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png'
import { CSVLink } from "react-csv";


const BarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
    position: sticky; top: 0;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.large};
    font-family: ${({ theme: { fonts } }) => fonts[3]};
    background-color: #fff;
    border-bottom: solid 1px #003459;
`
const ButtonExport = styled(CSVLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 34px;
    width: 100px;
    border: none;
    font-size: 18px;
    text-decoration: none;
    font-family: 'catamaran-semibold';
    color: ${({ theme: { colors } }) => colors.darkBlue};
    background-color:${({ theme: { colors } }) => colors.yellow};
    border-radius: ${({ theme: { bordersRadius } }) => bordersRadius.button};
`
const Image = styled.img`
    /* mix-blend-mode: multiply; */
`

function Navbar({ data }) {
    return (
        <BarContainer>
            <Image src={logo} alt="logo immo-helper" />
            <ButtonExport
                data={data}
                filename={"immohelper-file.csv"}
                target="_blank"
            > Exporter </ButtonExport>
        </BarContainer>
    );
}

export default Navbar;