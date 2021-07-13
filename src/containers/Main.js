import React, { useState } from 'react';
import { Container, Button, H1 } from '../styles/styled';
import Modal from '../components/Modal';
import Card from '../components/Card';

function Main() {
    const [openModal, setOpenModal] = useState(false);
    const [data, setData] = useState('')
    
    function formResult(data) {
        setData(data);
    }

    return (
        <Container>
            <Button onClick={() => { setOpenModal(true) }}>Cliquez ici!</Button>
            {openModal && <Modal closeModal={setOpenModal} formResult={formResult} />}
            <H1>{data.prix}price</H1>
        </Container>
    );
}

export default Main;