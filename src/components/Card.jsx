import React from 'react';
import { CardContainer, CardWrapper, Row, CardPic, CardHeader, P, A, CardFooter, CardButton, CardButtonEdit } from '../styles/styled';
import Placeholder from './Placeholder';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri'

function Card({ dataForCard, removeCard, cardEditing, openModalEdit }) {

    function test() {
        cardEditing(dataForCard.id)
        openModalEdit(true);
    }

    return (
        <CardContainer>
            <CardPic>
                <Placeholder />
            </CardPic>
            <CardWrapper>
                <CardFooter>
                    <CardButton onClick={() => removeCard(dataForCard.id)}><RiDeleteBin6Line /></CardButton>
                    <CardButtonEdit onClick={test}> <FaEdit /> </CardButtonEdit>
                </CardFooter>
                <CardHeader>
                    <Row>
                        <P> Lien : <A href={dataForCard.lien} target="_blank">{dataForCard.lien}</A></P>
                    </Row>
                    <Row>
                        <P>{dataForCard.prix}€/mois</P>
                        <P>{dataForCard.pieces} pièces</P>
                        <P>{dataForCard.metres} m2</P>
                    </Row>
                    <Row>
                        <P> Lieu : {dataForCard.lieu}</P>
                    </Row>
                    <Row>
                        <P>Contacté : {dataForCard.contactOui === true ? <span>Oui</span> : "" || dataForCard.contactNon === true ? <span>Non</span> : ""}</P>
                        <P>Visité : {dataForCard.visiterOui === true ? <span>Oui</span> : "" || dataForCard.visiterNon === true ? <span>Non</span> : ""}</P>
                    </Row>
                    <Row>
                        <P>Contact : {dataForCard.contact} </P>
                    </Row>
                    <Row>
                        <P>Commentaires : {dataForCard.commentaires}</P>
                    </Row>
                </CardHeader>
            </CardWrapper>
        </CardContainer >
    );
}
export default Card;