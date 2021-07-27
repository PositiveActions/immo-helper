import React from 'react';
import { useForm } from "react-hook-form";
import styled from 'styled-components';
import Input from '../components/Input';
import { ModalContainer, ModalBackground } from '../styles/styled'
import { ModalTitle, Label, CloseModalButton, Form } from '../styles/styledForm'

const InputCheckbox = styled(Input)`
    
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
                        <Input type="number" errors={errors} registerFn={register("pieces", { required: true, maxLength: 2 })} name="pieces" defaultValue={cardValues.pieces} />
                    </Label>
                    <Label>M²
                        <Input type="number" errors={errors} registerFn={register("metres", { required: true, maxLength: 5 })} name="metres" defaultValue={cardValues.metres} />
                    </Label>
                    <Label>Lieu
                        <Input type="text" errors={errors} registerFn={register("lieu", { required: true })} name="lieu" value={cardValues.lieu} defaultValue={cardValues.lieu} />
                    </Label>
                    <Label>Contact
                        <Input type="text" errors={errors} registerFn={register("contact", { required: true })} name="contact" defaultValue={cardValues.contact} />
                    </Label>
                    <fieldset>
                        <Label>Contacter</Label>
                        <Label><InputCheckbox type="checkbox" errors={errors} registerFn={register("contactOui", { required: true })} name="contactOui" />Oui</Label>
                        <Label><InputCheckbox type="checkbox" errors={errors} registerFn={register("contactNon", { required: true })} name="contactNon" />Non</Label>
                    </fieldset>
                    <fieldset>
                        <Label>Visiter</Label>
                        <Label><InputCheckbox type="checkbox" errors={errors} registerFn={register("visiterOui", { required: true })} name="visiterOui" />Oui</Label>
                        <Label><InputCheckbox type="checkbox" errors={errors} registerFn={register("visiterNon", { required: true })} name="visiterNon" />Non</Label>
                    </fieldset>
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