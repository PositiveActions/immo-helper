import React from 'react';
import styled from 'styled-components';
import media from "styled-media-query";

 export const FooterContainer = styled.div`
    bottom: 0;
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme: { colors } }) => colors.darkBlue};
`;

export const FooterContent = styled.div`
    display: flex;
    align-items: center;
    font-family: 'catamaran-semibold';
    color: ${({ theme: { colors } }) => colors.white};
    font-size: ${({ theme: { fontSizes } }) => fontSizes.small};

    ${media.lessThan("small")`
        font-size: ${({ theme: { fontSizes } }) => fontSizes.extraSmall};
    `}
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
