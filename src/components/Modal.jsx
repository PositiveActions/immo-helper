import React from 'react';
import { ModalContainer } from '../styles/styled'
import styled from 'styled-components';



const ModalTitle = styled.h1`
    display: inline-block;
    text-align: center;
    margin-top: 10px;
    color: black;
    font-size: 2rem;
`

const CloseModalButton = styled.button`
    display: flex;
    justify-content: flex-end;
    background-color: transparent;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    color: black;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    color: black;
`

function Modal({ closeModal }) {
    return (
        <ModalContainer>
            <CloseModalButton onClick={() => closeModal(false)} >X</CloseModalButton>
            <ModalTitle>Mon Modal</ModalTitle>
            <Form>
                <label>Lien</label>
                <input type="text" />
                <label>Prix</label>
                <input type="number" />
                <label>N° Pièces</label>
                <input type="number" />
                <label>M²</label>
                <input type="number" />
                <label>Contacter</label>
                <label>Oui</label>
                <input type="checkbox" />
                <label>Non</label>
                <input type="checkbox" />
                <label>Visiter</label>
                <label>Oui</label>
                <input type="checkbox" />
                <label>Non</label>
                <input type="checkbox" />
                <label>Contact</label>
                <input type="text" />
                <label>Commentaires</label>
                <textarea name="" id="" cols="30" rows="5"></textarea>

                <button type="submit">Ajouter</button>

            </Form>
        </ModalContainer>
    );
}

export default Modal;