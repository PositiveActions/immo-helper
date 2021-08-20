import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri'
import { P, Span } from '../styles/styled';
import { CardStyle, PlaceholderImage, Description, CardsButtons, CardDelete, CardEdit } from '../styles/styledCard';

function Card({ dataForCard, removeCard, cardEditing }) {

    function cardId() {
        cardEditing(dataForCard.id)
    }

    return (
        <CardStyle>
            <PlaceholderImage>
                <a href={dataForCard.lien} target="_blank" rel="noreferrer"><img src={dataForCard.infoSite.image} alt={dataForCard.infoSite.titre} style={{
                    width: "100%",
                    height: "235px"
                }} /></a>
            </PlaceholderImage>
            <Description>
                <CardsButtons>
                    <CardDelete onClick={() => removeCard(dataForCard.id)}><RiDeleteBin6Line /></CardDelete>
                    <CardEdit onClick={cardId}> <FaEdit /> </CardEdit>
                </CardsButtons>
                <P><Span>Titre: </Span> {dataForCard.infoSite.titre}</P>
                <P><Span>{dataForCard.prix}€/mois</Span></P>
                <P><Span>{dataForCard.pieces} Pièces</Span></P>
                <P><Span>{dataForCard.metres} m²</Span></P>
                <P><Span>Lieu :</Span> {dataForCard.lieu}</P>
                <P><Span>Contacté :</Span> {dataForCard.contactOui === true ? <Span>Oui</Span> : "" || dataForCard.contactNon === true ? <Span>Non</Span> : ""}</P>
                <P><Span>Visité :</Span> {dataForCard.visiterOui === true ? <Span>Oui</Span> : "" || dataForCard.visiterNon === true ? <Span>Non</Span> : ""}</P>
                <P><Span>Contact :</Span> {dataForCard.contact} </P>
                <P><Span>Commentaires :</Span> {dataForCard.commentaires}</P>
            </Description>
        </CardStyle>
    );
}
export default Card;