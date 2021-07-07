import React from 'react';
import styled from 'styled-components';
import { CardContainer, CardWrapper, Row, CardPic, CardHeader, CardFooter } from '../styles/styled';
import Placeholder from './Placeholder';
import media from 'styled-media-query'

const cardData =
{
    'img': '',
    'prix': 870,
    'pieces': 3,
    'metresCarres': 50,
    'localisation': 'Paris',
    'contacter': 'oui',
    'visite': 'non',
    'contact': 'maison@maison.com',
    'commentaire': 'Des travaux a prévoir dans la cuisine et dans la salle de bain.'
};

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
function Card() {
    return (
        <StyledCard>
            <CardPic>
                <Placeholder img={cardData.img}></Placeholder>
            </CardPic>

            <CardWrapper>
                <CardHeader>
                    <Row>
                        <P>{cardData.prix}€/mois</P>
                        <P>{cardData.pieces} pièces</P>
                        <P>{cardData.metresCarres} m2</P>
                        <P>{cardData.localisation}</P>
                    </Row>
                    <Row>
                        <P>Contacté : {cardData.contacter}</P>
                        <P>Visité : {cardData.visite}</P>
                    </Row>
                    <Row>
                        <P>Contact : {cardData.contact}</P>
                    </Row>
                </CardHeader>

                <CardFooter>
                    <Row>
                        <P>{cardData.commentaire}</P>
                    </Row>
                </CardFooter>
            </CardWrapper>
        </StyledCard>
    );
}

export default Card;