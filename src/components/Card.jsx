import React from 'react';
import styled from 'styled-components';
import { CardContainer, CardWrapper, Row, CardPic, CardHeader } from '../styles/styled';
import Placeholder from './Placeholder';
import media from 'styled-media-query'


const StyledCard = styled(CardContainer)`
    ${media.greaterThan("large")`
        flex-direction: row;
    `}
`
const P = styled.p`
    margin: 0 20px;
    font-family: ${({ theme: { fonts } }) => fonts[2]};
    font-size: ${({ theme: { fontSizes } }) => fontSizes.medium};
`
function Card({ dataForCard }) {

    return (
        <StyledCard>
            <CardPic>
                <Placeholder img={dataForCard.lien}></Placeholder>
            </CardPic>

            <CardWrapper>
                <CardHeader>
                    <Row>
                        <P>{dataForCard.prix}€/mois</P>
                        <P>{dataForCard.pieces} pièces</P>
                        <P>{dataForCard.metres} m2</P>
                    </Row>
                    <Row>
                        <P> Lieu : {dataForCard.lieu}</P>
                    </Row>
                    <Row>
                        <P>Contacté : {dataForCard.contacter}</P>
                        <P>Visité : {dataForCard.visite}</P>
                    </Row>
                    <Row>
                        <P>Contact : {dataForCard.contact}</P>
                    </Row>
                    <Row>
                        <P>Commentaires : {dataForCard.commentaires}</P>
                    </Row>
                </CardHeader>
            </CardWrapper>
        </StyledCard>
    );
}

export default Card;