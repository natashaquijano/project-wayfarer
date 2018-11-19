import React, { Component } from 'react';
import NavBar from '../components/navbar/NavBar';
import Slider from '../components/slider/Slider';
import MainContent from '../components/mainContent/MainContent';
import Footer from '../components/footer/Footer';


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