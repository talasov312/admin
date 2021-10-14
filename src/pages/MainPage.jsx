import { Container } from '@material-ui/core';
import React from 'react';
import Carusel from '../components/Carusel';
import Content from '../components/Content';
import LeftSidebar from '../components/LeftSidebar';
import Navbar from '../components/Navbar';

const MainPage = () => {
    return (
        <div className="mainphoto">
            <Navbar />
            <Container>
                <h1 className="maintext"></h1>
                <Carusel/>
                <div className="main">
                    <Content />
                    <LeftSidebar />
                    
                </div>
            </Container>
        </div>
    );
};

export default MainPage;
