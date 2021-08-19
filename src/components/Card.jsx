import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri'
import { P } from '../styles/styled';
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
                <P><span>Titre: </span> {dataForCard.infoSite.titre}</P>
                <P><span>{dataForCard.prix}€/mois</span></P>
                <P><span>{dataForCard.pieces} Pièces</span></P>
                <P><span>{dataForCard.metres} m²</span></P>
                <P><span>Lieu :</span> {dataForCard.lieu}</P>
                <P><span>Contacté :</span> {dataForCard.contactOui === true ? <span>Oui</span> : "" || dataForCard.contactNon === true ? <span>Non</span> : ""}</P>
                <P><span>Visité :</span> {dataForCard.visiterOui === true ? <span>Oui</span> : "" || dataForCard.visiterNon === true ? <span>Non</span> : ""}</P>
                <P><span>Contact :</span> {dataForCard.contact} </P>
                <P><span>Commentaires :</span> {dataForCard.commentaires}</P>
            </Description>
        </CardStyle>
    );
}
export default Card;