import React, { Component } from 'react';
import Carousel from './Carousel';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <Carousel />
            </div>
        );
    }
}

export default Header;
