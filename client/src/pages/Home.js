// import React, { Component } from 'react';
// import NavBar from '../components/navbar/NavBar';
// import Slider from '../components/slider/Slider';
// import MainContent from '../components/mainContent/MainContent';
// import Footer from '../components/footer/Footer';


// class Home extends Component {
//     render() {
//         return (
//             <div>
//                 <NavBar />
//                 <Slider />
//                 <MainContent />
//                 <Footer />
//             </div>
//         );
//     }
// }

// export default Home;

import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Wayfarer</h1>

                <div>
                    <div>
                        <Button color="success" onClick={() => {
                            this.props.history.push("/login")
                        }}>Login</Button>
                    </div>
                    <div>
                        <Button color="success" onClick={() => {
                            this.props.history.push("/signup")
                        }}>Sign Up</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;