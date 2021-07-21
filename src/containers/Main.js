import React, { useState, useEffect } from 'react';
import { Container, Button } from '../styles/styled';
import Modal from '../components/Modal';
import Card from '../components/Card'
import ModalEdit from '../components/ModalEdit';


function Main() {
    const [openModal, setOpenModal] = useState(false);
    const [dataList, setDataList] = useState([]);
    const [modalEditing, setModalEditing] = useState(false);

    console.log('dataList', dataList)

    useEffect(() => {
        const initialList = JSON.parse(localStorage.getItem('immo-helper:list')) || [];
        setDataList(initialList)
    }, [])

    function formResult(data) {
        data.id = new Date().getTime();
        dataList.push(data);
        setDataList(dataList);
        localStorage.setItem('immo-helper:list', JSON.stringify(dataList));
    }

    function removeCard(id) {
        const newList = dataList.filter(elem => elem.id !== id);
        setDataList(newList)
        localStorage.setItem('immo-helper:list', JSON.stringify(newList));
    }

    function formEditResult(data) { 
        data = dataList
    }

    function cardEditing(dataFormId) {

        const selectedItem = dataList.find(elem => elem.id === dataFormId)
        setModalEditing(selectedItem)
        console.log(selectedItem);

        const newDatalist = dataList.map(elem => {
            if (elem.id === dataFormId.id) {
                return dataFormId
            } else {
                return elem
            }
        })
        setDataList(newDatalist)
    }

    return (
        <Container>
            <Button onClick={() => { setOpenModal(true) }}>Cliquez ici!</Button>
            {openModal && <Modal closeModal={setOpenModal} formResult={formResult} />}
            {modalEditing && <ModalEdit closeModalEdit={setModalEditing} formEditResult={formEditResult}/>}
            {dataList.map((item) => <Card key={item.id} dataForCard={item} removeCard={removeCard} openModalEdit={setModalEditing} cardEditing={cardEditing} />)}
        </Container>
    );
}

export default Main;


// creer un autre form 
// faire en sorte que le modal s'ouvre lorsqu'on click sur editer
// il doit s'ouvrir sur le meme eleme et pouvoir le modifier 
// lorsqu'on reclick sur le bouton ajouter il doit modifier le meme elem et ne pas en créer un autre. 
//creer un state pour sauvegarder 
