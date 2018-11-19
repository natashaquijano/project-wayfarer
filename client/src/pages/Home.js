import React, { Component } from 'react';
import NavBar from '../components/NavBar'

class Home extends Component {
    render() {
        return (
            <div>
                <NavBar history={this.props.history} />
            </div>
        );
    }
}

export default Home;