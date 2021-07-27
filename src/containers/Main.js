import React, { useState, useEffect } from 'react';
import { Container, Button, H1 } from '../styles/styled';
import ModalEdit from '../components/ModalEdit';
import Modal from '../components/Modal';
import Card from '../components/Card'

function Main() {
    const [openModal, setOpenModal] = useState(false);
    const [dataList, setDataList] = useState([]);
    const [openModalEditing, setOpenModalEditing] = useState(false);
    const [cardData, setCardData] = useState([]);

    useEffect(() => {
        const initialList = JSON.parse(localStorage.getItem('immo-helper:list')) || [];
        setDataList(initialList);
    }, []);

    function formResult(data) {
        data.id = new Date().getTime();
        dataList.push(data);
        setDataList(dataList);
        localStorage.setItem('immo-helper:list', JSON.stringify(dataList));
    };

    function formEditResult(dataEditForm) {
        const newDatalist = dataList.map(elem => {
            if (elem.id === dataEditForm.id) {
                return dataEditForm
            } else {
                return elem
            }
        })
        setDataList(newDatalist)
        localStorage.setItem('immo-helper:list', JSON.stringify(newDatalist));
    };

    function removeCard(id) {
        const newList = dataList.filter(elem => elem.id !== id);
        setDataList(newList);
        localStorage.setItem('immo-helper:list', JSON.stringify(newList));
    };

    function cardEditing(dataFormId) {
        const selectedItem = dataList.find(elem => elem.id === dataFormId);
        setCardData(selectedItem);
    };

    return (
        <Container>
            <H1>Nom de l'application</H1>
            <Button onClick={() => { setOpenModal(true) }}>Cliquez ici!</Button>
            {openModal && <Modal closeModal={setOpenModal} formResult={formResult} />}
            {openModalEditing && <ModalEdit closeModalEdit={setOpenModalEditing} cardData={cardData} formEditResult={formEditResult} />}
            {dataList.map((item) => <Card key={item.id} dataForCard={item} removeCard={removeCard} openModalEdit={setOpenModalEditing} cardEditing={cardEditing} />)}
        </Container>
    );
}
export default Main;
