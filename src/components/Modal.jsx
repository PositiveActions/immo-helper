import React from 'react';
import { useForm } from "react-hook-form";
import Input from '../components/Input';
import { ModalBackground, ModalContainer, ModalTitle, Label, CloseModalButton, Form, ButtonFormContainer, LabelCheckbox } from '../styles/styledForm'
import { Button } from '../styles/styled';

function Modal({ setModalDisplay, formResult, formEditResult, cardData, ajoutCard }) {
    const infoCard = ajoutCard ? {} : cardData;
    const { register, formState: { errors }, watch, handleSubmit } = useForm({ defaultValues: infoCard })

    const onSubmit = async () => {
        const watchAllFields = await watch();
        formResult(watchAllFields);
    };

    const onSubmitEdit = async () => {
        const watchAll = await watch();
        formEditResult(watchAll)
    };

    return (
        <ModalBackground>
            <ModalContainer>
                <CloseModalButton onClick={() => setModalDisplay(false)} >X</CloseModalButton>
                <ModalTitle>Infos Appartement/Maison</ModalTitle>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Label>Lien du bien
                        <Input type="text" errors={errors} registerFn={register("lien", { required: true, maxLength: 15 })} name="lien" />
                        <span>{errors.lien?.type === 'required' && "Link is required"}</span>
                    </Label>
                    <Label>Prix
                        <Input type="number" errors={errors} registerFn={register("prix", { required: true, maxLength: 8 })} name="prix" />
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
                        <LabelCheckbox><Input type="checkbox" errors={errors} registerFn={register("contactOui", { required: true })} name="contactOui" />Oui</LabelCheckbox>
                        <LabelCheckbox><Input type="checkbox" errors={errors} registerFn={register("contactNon", { required: true })} name="contactNon" />Non</LabelCheckbox>
                    </Label>
                    <Label>Visiter
                        <LabelCheckbox><Input type="checkbox" errors={errors} registerFn={register("visiterOui", { required: true })} name="visiterOui" /> Oui</LabelCheckbox>
                        <LabelCheckbox><Input type="checkbox" errors={errors} registerFn={register("visiterNon", { required: true })} name="visiterNon" /> Non</LabelCheckbox>
                    </Label>
                    <Label>Commentaires :
                        <Input type="text" errors={errors} registerFn={register("commentaires", { required: true })} name="commentaires" />
                    </Label>
                </Form>
                <ButtonFormContainer>
                    {ajoutCard ?
                        <Button type="submit" onClick={onSubmit} >Ajouter</Button>
                        : <Button type="submit" onClick={onSubmitEdit} >Sauvegarder</Button>}
                </ButtonFormContainer>
            </ModalContainer>
        </ModalBackground>
    );
}
export default Modal;