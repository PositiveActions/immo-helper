import React from 'react';
import { useForm } from "react-hook-form";
import styled from 'styled-components';
import Input from '../components/Input'
import { ModalContainer } from '../styles/styled'


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

function Modal({ closeModal, formResult }) {
    const { register, formState: { errors }, watch, handleSubmit } = useForm();


    const onSubmit = async () => {
        const watchAllFields = await watch();
        formResult(watchAllFields);
    };

    return (
        <ModalContainer>
            <CloseModalButton onClick={() => closeModal(false)} >X</CloseModalButton>
            <ModalTitle>Mon Modal</ModalTitle>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <label>Lien
                    <Input type="text" errors={errors} registerFn={register("lien", { required: true, maxLength: 15 })} name="lien" />
                    <span>{errors.lien?.type === 'required' && "Link is required"}</span>
                </label>
                <label>Prix
                    <Input type="number" errors={errors} registerFn={register("prix", { required: true, maxLength: 7 })} name="prix" />
                </label>
                <label>N° Pièces
                    <Input type="number" errors={errors} registerFn={register("pieces", { required: true, maxLength: 2 })} name="pieces" />
                </label>
                <label>M²
                    <Input type="number" errors={errors} registerFn={register("metres", { required: true, maxLength: 5 })} name="metres" />
                </label>
                <label>Contacter :
                    <label>Oui
                        <Input type="checkbox" errors={errors} registerFn={register("contactOui", { required: true })} name="contactOui" />
                    </label>
                    <label>Non
                        <Input type="checkbox" errors={errors} registerFn={register("contactNon", { required: true })} name="contactNon" />
                    </label>
                </label>
                <label>Visiter :
                    <label>Oui
                        <Input type="checkbox" errors={errors} registerFn={register("visiterOui", { required: true })} name="visiterOui" />
                    </label>
                    <label>Non
                        <Input type="checkbox" errors={errors} registerFn={register("visiterNon", { required: true })} name="visiterNon" />
                    </label>
                </label>
                <label>Contact
                    <Input type="text" errors={errors} registerFn={register("contact", { required: true })} name="contact" />
                </label>
                <label>Commentaires :
                    <Input type="text" errors={errors} registerFn={register("commentaires", { required: true })} name="commentaires" />
                </label>
                <button type="submit" onClick={onSubmit}>Ajouter</button>
            </Form>
        </ModalContainer>
    );
}

export default Modal;