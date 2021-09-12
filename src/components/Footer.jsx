import React from 'react';
import styled from 'styled-components';
import media from "styled-media-query";

const FooterContainer = styled.div`
    bottom: 0;
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme: { colors } }) => colors.darkBlue};
`;

const FooterContent = styled.div`
    display: flex;
    align-items: center;
    font-family: 'catamaran-semibold';
    color: ${({ theme: { colors } }) => colors.white};
    font-size: ${({ theme: { fontSizes } }) => fontSizes.small};

    ${media.lessThan("small")`
        font-size: ${({ theme: { fontSizes } }) => fontSizes.extraSmall};
    `}
`;

const Alink = styled.a`
    color: pink;
`;

export default function Footer() {
    return (
        <FooterContainer>
            <FooterContent>
                <p>This website is <Alink target="_blank" href="https://github.com/PositiveActions/immo-helper">open source</Alink>. Enjoy ♥️ </p>
            </FooterContent>
        </FooterContainer>
    )
}
