import React, { useState } from 'react';
import { Container, Button } from '../styles/styled'
import Modal from '../components/Modal'

function Main() {
    const [openModal, setOpenModal] = useState(false);

    return (
        <Container>
            <Button onClick={() => { setOpenModal(true) }}>Cliquez ici!</Button>
            {openModal && <Modal closeModal={setOpenModal} />}
        </Container>
    );
}

export default Main;