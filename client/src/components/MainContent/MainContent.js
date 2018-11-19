import React, { Component } from 'react'
import './MainContent.css';

class MainContent extends Component {
    render() {
        return (
            <div className="container mtop">
                <h2 className="center">What is WAYFARER?</h2>

                <div className="row">
                    <div className="col-sm">
                        <h3>way·far·er</h3>
                        <h4>/ˈwāˌferər/</h4>
                        <p>noun: wayfarer;<br/>plural noun: wayfarers</p>
                        <p>a person who travels on foot.</p>
                    </div>
                    <div className="col-sm">
                        <h5 className="lineheight"><strong>Synonyms:</strong> drifter, vagabond, gypsy...</h5>
                        <h6 className="lineheight"><em>knockabout, maunderer, nomad, rambler, roamer, rover, stroller, wanderer</em></h6>
                    </div>
                    <div className="col-sm">
                        <h5 className="lineheight">One of the great <em>wayfarers</em> of American folklore, <strong>Johnny Appleseed</strong> wandered across the country, always planting apple seeds.</h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainContent;