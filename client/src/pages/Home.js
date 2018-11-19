import React, { Component } from 'react';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer/Footer';
import MainContent from '../components/MainContent/MainContent';
import Slider from '../components/Slider/Slider';

class Home extends Component {
    render() {
        return (
            <div>
                <NavBar history={this.props.history} />
                <Slider />
                <MainContent />
                <Footer />
            </div>
        );
    }
}

export default Home;