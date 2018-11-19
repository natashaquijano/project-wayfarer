import React, { Component } from 'react';
import NavBar from '../../navbar/NavBar';
import Slider from './slider/Slider';
import MainContent from '../../mainContent/MainContent';
import Footer from '../../footer/Footer';


class Home extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Slider />
                <MainContent />
                <Footer />
            </div>
        );
    }
}

export default Home;