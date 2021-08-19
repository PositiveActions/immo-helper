import React, { useState, useEffect } from 'react';
import { Container, Button, Header, Description, H1, H2 } from '../styles/styled';
import { CardContainer } from '../styles/styledCard';
import Modal from '../components/Modal';
import Card from '../components/Card';
import { fetchData } from '../service/network';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Main() {
    const [formAffichage, setModalDisplay] = useState(false);
    const [dataList, setDataList] = useState([]);
    const [ajoutCard, setAjoutCard] = useState(false);
    const [cardData, setCardData] = useState({});

    const csvData = dataList;

    useEffect(() => {
        const initialList = JSON.parse(localStorage.getItem('immo-helper:list')) || [];
        setDataList(initialList);
    }, []);

    async function formResult(data) {
        data.id = new Date().getTime();

        const url = data.lien;
        try {
            const dataBack = await fetchData(url)
            data.infoSite = dataBack;
        } catch (error) {
            data.infoSite = {};
        }

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
            <Navbar data={csvData}/>
            <Header>
                <Description>
                    <H1>Immo-Helper</H1>
                    <p>Immo-helper vous aide à garder une trace des biens qui vous intéressent, le site sur lequel vous les avez trouvés, le contact et les caractéristiques du bien.</p>
                </Description>
                <Button onClick={cardCreate}>Cliquez ici !</Button>
                {formAffichage &&
                    <Modal
                        setModalDisplay={setModalDisplay}
                        formResult={formResult}
                        formEditResult={formEditResult}
                        cardData={cardData}
                        ajoutCard={ajoutCard} />
                }
            </Header>
            <H2>Ma Selection</H2>
            <CardContainer>
                {dataList.map((item) =>
                    <Card
                        key={item.id}
                        dataForCard={item}
                        removeCard={removeCard}
                        cardEditing={cardEditing} />)}
            </CardContainer>
            <Footer/>
        </Container >
    );
}
export default Main;
