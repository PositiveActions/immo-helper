import React, { useState, useEffect } from 'react';
import { Container, Button, Header, Description, H1, H2, Pdescription } from '../styles/styled';
import { CardContainer, Selection  } from '../styles/styledCard';
import { fetchData } from '../service/network';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Modal from '../components/Modal';
import Card from '../components/Card';

function Main() {
    const [formAffichage, setModalDisplay] = useState(false);
    const [dataList, setDataList] = useState([]);
    const [ajoutCard, setAjoutCard] = useState(false);
    const [cardData, setCardData] = useState({});

    useEffect(() => {
        const initialList = JSON.parse(localStorage.getItem('immo-helper:list')) || [];
        setDataList(initialList);
    }, []);

    async function getLinkData(link) {
        try {
            let infoSite = {};
            if (link) {
                infoSite = await fetchData(link);
            }
            return infoSite;
        } catch (error) {
            return {};
        }
    }

    function saveData(dataList) {
        setDataList(dataList)
        localStorage.setItem('immo-helper:list', JSON.stringify(dataList));
        setModalDisplay(false);
    }

    async function formResult(data) {
        data.id = new Date().getTime();
        data.infoSite = await getLinkData(data.lien)
        dataList.push(data);
        saveData(dataList);
        setAjoutCard(false);
    };

    function formEditResult(dataEditForm) {
        const newDatalist = dataList.map(elem => {
            return (elem.id === dataEditForm.id) ? dataEditForm : elem;
        })
        saveData(newDatalist);
    };

    function removeCard(id) {
        const newList = dataList.filter(elem => elem.id !== id);
        saveData(newList)
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
            <Navbar data={dataList} />
            <Header>
                <Description>
                    <H1>ImmoHelper</H1>
                    <Pdescription>ImmoHelper vous aide à garder une trace des biens qui vous intéressent, le site sur lequel vous les avez trouvés, le contact et les caractéristiques du bien.</Pdescription>
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
            <H2>Votre sélection</H2>
            <CardContainer>
                {dataList.length ? null : <Selection>Vous n'avez pas encore ajouté de bien.</Selection>}
                {
                    dataList.map((item) =>
                        <Card
                            key={item.id}
                            dataForCard={item}
                            removeCard={removeCard}
                            cardEditing={cardEditing} />)
                }
            </CardContainer>
            <Footer />
        </Container >
    );
}
export default Main;
