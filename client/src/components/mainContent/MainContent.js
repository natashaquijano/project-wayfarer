import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

class MainContent extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        Topic City 1
                     </div>
                    <div className="col-sm">
                        Topic City 2
                     </div>
                    <div className="col-sm">
                        Topic City 3
                    </div>
                </div>
            </div>
        );
    }
}

export default MainContent;