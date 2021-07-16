import React, { useState, useEffect } from 'react';
import { Container, Button } from '../styles/styled';
import Modal from '../components/Modal';
import Card from '../components/Card'


function Main() {
    const [openModal, setOpenModal] = useState(false);
    const [dataList, setDataList] = useState([]);

    useEffect(() => {
        const initialList = JSON.parse(localStorage.getItem('immo-helper:list'))
        setDataList(initialList)
    }, [])

    function formResult(data) {
        dataList.push(data)
        setDataList(dataList)
        localStorage.setItem('immo-helper:list', JSON.stringify(dataList))
    }

    return (
        <Container>
            <Button onClick={() => { setOpenModal(true) }}>Cliquez ici!</Button>
            {openModal && <Modal closeModal={setOpenModal} formResult={formResult} />}
            {dataList.map(item =>  <Card dataForCard={item} />)}
        </Container>
    );
}

export default Main;