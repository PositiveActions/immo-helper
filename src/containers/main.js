import React from 'react';
import Card from '../components/Card';
import { H1, Section, Container } from '../styles/styled'
import styled from 'styled-components';

const ContainerMain = styled(Container)`
    width: 100%;
    padding: 0px;
`;

const SectionMain = styled(Section)`
    margin: 20px auto;
    text-align: center;
    display: flex;
`;

const SectionCards = styled(Section)`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

function index() {
    return (
        <ContainerMain>
            <SectionMain>
                <H1>Immo-Helper</H1>
            </SectionMain>
            <SectionCards>
                <Card />
                <Card />
            </SectionCards>
        </ContainerMain>
    );
}

export default index;