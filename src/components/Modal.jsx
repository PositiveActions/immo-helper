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
                <label>Lien
                    <input type="text" />
                </label>
                <label>Prix
                    <input type="number" />
                </label>
                <label>N° Pièces
                    <input type="number" />
                </label>
                <label>M²
                    <input type="number" />
                </label>
                <label>Contacter :
                    <label>Oui
                        <input type="checkbox" />
                    </label>
                    <label>Non
                        <input type="checkbox" />
                    </label>
                </label>
                <label>Visiter :
                    <label>Oui
                        <input type="checkbox" />
                    </label>
                    <label>Non
                        <input type="checkbox" />
                    </label>
                </label>
                <label>Contact
                    <input type="text" />
                </label>
                <label>Commentaires :
                    <textarea name="" id="" cols="30" rows="5"></textarea>
                </label>

                <button type="submit">Ajouter</button>

            </Form>
        </ModalContainer>
    );
}

export default Modal;