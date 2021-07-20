import React, { useState, useEffect } from 'react';
import { Container, Button } from '../styles/styled';
import Modal from '../components/Modal';
import Card from '../components/Card'


function Main() {
    const [openModal, setOpenModal] = useState(false);
    const [dataList, setDataList] = useState([]);
    const [dataEditing, setDataEditing] = useState();

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

    function cardEditing(dataForm) {
        const newDatalist = dataList.map(elem => {
            if (elem.id === dataForm.id) {
                return dataForm
            } else {
                return elem
            }
        })
        setDataList(newDatalist)
        setOpenModal(true)
    }

    return (
        <Container>
            <Button onClick={() => { setOpenModal(true) }}>Cliquez ici!</Button>
            {openModal && <Modal closeModal={setOpenModal} formResult={formResult}  />}
            {dataList.map((item) => <Card key={item.id} dataForCard={item} removeCard={removeCard} cardEditing={cardEditing}  />)}
        </Container>
    );
}

export default Main;



// faire en sorte que le modal s'ouvre lorsqu'on click sur editer
// il doit s'ouvrir sur le meme eleme et pouvoir le modifier 
// lorsqu'on reclick sur le bouton ajouter il doit modifier le meme elem et ne pas en créer un autre. 
//creer un state pour sauvegarder 
