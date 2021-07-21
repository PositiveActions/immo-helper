import React from 'react';
import { useForm } from "react-hook-form";
import styled from 'styled-components';
import Input from '../components/Input'
import { ModalContainer, ModalBackground } from '../styles/styled'


const ModalTitle = styled.h1`
    display: inline-block;
    text-align: center;
    margin-top: 10px;
    color: ${({ theme: { colors } }) => colors.darkBlue};
    font-family: ${({ theme: { fonts } }) => fonts[3]};
    font-size: 2rem;
`
const Label = styled.label`
    line-height: 2;
    text-align: left;
    display: block;
    color: ${({ theme: { colors } }) => colors.darkBlue};
    font-family: ${({ theme: { fonts } }) => fonts[3]};
    font-size: 1.5rem;
    font-weight: 200;
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
    align-items: center;
    justify-content: space-evenly;
    color: black;
    display: grid;
    grid-template-columns: 2fr 2fr;
    grid-gap: 20px;
    margin : 40px;
`

function Modal({ closeModalEdit, cardData, formEditResult }) {
    const cardValues = cardData;

    const { register, formState: { errors }, watch, handleSubmit } = useForm({ defaultValues: cardValues });
    
    const onSubmit = async () => {
        const watchAll = await watch();
        formEditResult(watchAll)
        closeModalEdit(false);
    };

    return (
        <ModalBackground>
            <ModalContainer>
                <CloseModalButton onClick={() => closeModalEdit(false)} >X</CloseModalButton>
                <ModalTitle>Infos Appartement/Maison</ModalTitle>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Label>Lien
                        <Input type="text" errors={errors} registerFn={register("lien", { required: true, maxLength: 15 })} name="lien" defaultValue={cardValues.lien} />
                    </Label>
                    <Label>Prix
                        <Input type="number" errors={errors} registerFn={register("prix", { required: true, maxLength: 7 })} name="prix" defaultValue={cardValues.prix} />
                    </Label>
                    <Label>N° Pièces
                        <Input type="number" errors={errors} registerFn={register("pieces", { required: true, maxLength: 2 })} name="pieces" defaultValue={cardValues.pieces}/>
                    </Label>
                    <Label>M²
                        <Input type="number" errors={errors} registerFn={register("metres", { required: true, maxLength: 5 })} name="metres" defaultValue={cardValues.metres}/>
                    </Label>
                    <Label>Lieu
                        <Input type="text" errors={errors} registerFn={register("lieu", { required: true })} name="lieu" value={cardValues.lieu} defaultValue={cardValues.lieu} />
                    </Label>
                    <Label>Contact
                        <Input type="text" errors={errors} registerFn={register("contact", { required: true })} name="contact" defaultValue={cardValues.contact}/>
                    </Label>
                    <Label>Contacter :
                        <Label>Oui
                            <Input type="checkbox" errors={errors} registerFn={register("contactOui", { required: true })} name="contactOui" defaultValue={cardValues.contactOui}/>
                        </Label>
                        <Label>Non
                            <Input type="checkbox" errors={errors} registerFn={register("contactNon", { required: true })} name="contactNon" defaultValue={cardValues.contactNon}/>
                        </Label>
                    </Label>
                    <Label>Visiter :
                        <Label>Oui
                            <Input type="checkbox" errors={errors} registerFn={register("visiterOui", { required: true })} name="visiterOui" defaultValue={cardValues.visiterOui}/>
                        </Label>
                        <Label>Non
                            <Input type="checkbox" errors={errors} registerFn={register("visiterNon", { required: true })} name="visiterNon" defaultValue={cardValues.visiterNon}/>
                        </Label>
                    </Label>
                    <Label>Commentaires :
                        <Input type="text" errors={errors} registerFn={register("commentaires", { required: true })} name="commentaires" defaultValue={cardValues.commentaires} />
                    </Label>
                    <button type="submit" onClick={onSubmit}>Valider les modifications</button>
                </Form>
            </ModalContainer>
        </ModalBackground>
    );
}
export default Modal;