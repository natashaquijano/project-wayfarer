import React, { Component } from 'react';
import AppNavbar from '../../AppNavbar';
import MainContent from '../../mainContent/MainContent';
import Carousel from './carousel/Sliders';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../../App.css';

class Homepage extends Component {
    render() {
        return (
            <div>
                <AppNavbar />
                <Carousel />
                <MainContent />
            </div>
        );
    }
}

export default Homepage;