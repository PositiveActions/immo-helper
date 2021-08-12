import React, { useState, useEffect } from 'react';
import { Container, Button, H1 } from '../styles/styled';
import Modal from '../components/Modal';
import Card from '../components/Card';
import { fetchData } from '../service/network';

function Main() {
    const [formAffichage, setModalDisplay] = useState(false);
    const [dataList, setDataList] = useState([]);
    const [ajoutCard, setAjoutCard] = useState(false)
    const [cardData, setCardData] = useState({});

    useEffect(() => {
        const initialList = JSON.parse(localStorage.getItem('immo-helper:list')) || [];
        setDataList(initialList);
    }, []);

    async function formResult(data) {
        data.id = new Date().getTime();
        
        const url = data.lien;
        const dataBack = await fetchData(url)
        data.infoSite = dataBack;
        
        dataList.push(data);
        setDataList(dataList);

        localStorage.setItem('immo-helper:list', JSON.stringify(dataList));
        setModalDisplay(false)
        setAjoutCard(false);
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
        setModalDisplay(false);
    };

    function removeCard(id) {
        const newList = dataList.filter(elem => elem.id !== id);
        setDataList(newList);
        localStorage.setItem('immo-helper:list', JSON.stringify(newList));
    };

    function cardEditing(dataFormId) {
        const selectedItem = dataList.find(elem => elem.id === dataFormId);
        setCardData(selectedItem);
        setAjoutCard(false);
        setModalDisplay(true);
    };

    function cardCreate() {
        setModalDisplay(true)
        setAjoutCard(true)
    }

    return (
        <Container>
            <H1>Immo helper</H1>
            <p>Immo helper vous aide a gardez une trace des biens qui vous intéressent, le site sur lequel vous l'avez trouvé, le contact et les caractéristiques du bien. </p>
            <Button onClick={cardCreate}>Cliquez ici!</Button>
            {formAffichage &&
                <Modal
                    setModalDisplay={setModalDisplay}
                    formResult={formResult}
                    formEditResult={formEditResult}
                    cardData={cardData}
                    ajoutCard={ajoutCard} />}
            {dataList.map((item) =>
                <Card
                    key={item.id}
                    dataForCard={item}
                    removeCard={removeCard}
                    cardEditing={cardEditing} />)}
        </Container>
    );
}
export default Main;
