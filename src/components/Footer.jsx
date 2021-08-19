import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 30px;
    margin-top: 30px;
    bottom: 0;
    background-color: #003459;
    font-family: ${({ theme: { fonts } }) => fonts[3]};
`;

const FooterContent = styled.div`
    display: flex;
    align-items: center;
    color: #f0efeb;
`;

export default function Footer() {
    return (
        <FooterContainer>
            <FooterContent>
                <p>Copyright &#169;{new Date().getFullYear()} Tous droits réservés.</p>
            </FooterContent>
        </FooterContainer>
    )
}
