import React, { Component } from 'react';

import slider1 from './nyc.jpg';
import slider2 from './bali.jpg';
import slider3 from './sf.jpg';


class Slider extends Component {
    render() { 
        return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
        <div className="carousel-inner">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleFade" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleFade" data-slide-to="1"></li>
                <li data-target="#carouselExampleFade" data-slide-to="2"></li>
             </ol>
            <div className="carousel-item active">
                <img className="d-block w-100" src={slider1} alt="First slide" />
                <div className="carousel-caption d-none d-md-block">
                    <h5>New York City</h5>
                    <p>The Big Apple</p>
                </div>
            </div>
            <div className="carousel-item">
                <img className="d-block w-100" src={slider2} alt="Second slide" />
                <div className="carousel-caption d-none d-md-block">
                    <h5>Bali, Indonesia</h5>
                    <p>The Enchanted Isle</p>
                </div>
            </div>
            <div className="carousel-item">
                <img className="d-block w-100" src={slider3} alt="Third slide" />
                <div className="carousel-caption d-none d-md-block">
                    <h5>San Francisco</h5>
                    <p>The Golden Gate</p>
                </div>
            </div>
        </div>
            <span className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </span>
            <span className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </span>
    </div>
          );
    }
}
 
export default Slider;