import React from 'react';
import { useForm } from "react-hook-form";
import Input from '../components/Input';
import { ModalContainer, ModalBackground } from '../styles/styled'
import { ModalTitle, Label, CloseModalButton, Form } from '../styles/styledForm'


function Modal({ closeModal, formResult }) {
    const { register, formState: { errors }, watch, handleSubmit } = useForm();

    const onSubmit = async () => {
        const watchAllFields = await watch();
        formResult(watchAllFields);
        closeModal(false)
    };

    return (
        <ModalBackground>
            <ModalContainer>
                <CloseModalButton onClick={() => closeModal(false)} >X</CloseModalButton>
                <ModalTitle>Infos Appartement/Maison</ModalTitle>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Label>Lien
                        <Input type="text" errors={errors} registerFn={register("lien", { required: true, maxLength: 15 })} name="lien" />
                        <span>{errors.lien?.type === 'required' && "Link is required"}</span>
                    </Label>
                    <Label>Prix
                        <Input type="number" errors={errors} registerFn={register("prix", { required: true, maxLength: 7 })} name="prix" />
                    </Label>
                    <Label>N° Pièces
                        <Input type="number" errors={errors} registerFn={register("pieces", { required: true, maxLength: 2 })} name="pieces" />
                    </Label>
                    <Label>M²
                        <Input type="number" errors={errors} registerFn={register("metres", { required: true, maxLength: 5 })} name="metres" />
                    </Label>
                    <Label>Lieu
                        <Input type="text" errors={errors} registerFn={register("lieu", { required: true })} name="lieu" />
                    </Label>
                    <Label>Contact
                        <Input type="text" errors={errors} registerFn={register("contact", { required: true })} name="contact" />
                    </Label>
                    <Label>Contacter
                        <Label><Input type="checkbox" errors={errors} registerFn={register("contactOui", { required: true })} name="contactOui" />Oui</Label>
                        <Label><Input type="checkbox" errors={errors} registerFn={register("contactNon", { required: true })} name="contactNon" />Non</Label>
                    </Label>
                    <Label>Visiter
                        <Label><Input type="checkbox" errors={errors} registerFn={register("visiterNon", { required: true })} name="visiterNon" />Non</Label>
                        <Label><Input type="checkbox" errors={errors} registerFn={register("visiterOui", { required: true })} name="visiterOui" />Oui</Label>
                    </Label>
                    <Label>Commentaires :
                        <Input type="text" errors={errors} registerFn={register("commentaires", { required: true })} name="commentaires" />
                    </Label>
                    <button type="submit" onClick={onSubmit} >Ajouter</button>
                </Form>
            </ModalContainer>
        </ModalBackground>
    );
}
export default Modal;