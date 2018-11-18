import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import '../../App.css';
import branding from './way.png';

class NavBar extends Component {
    render() { 
        return (
       <div>
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <Link className="navbar-brand" exact path to="/"><img src={branding} alt="Wayfarer Logo" /></Link>
              <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <Link className="nav-link dotted" data-toggle="modal" data-target="#login-modal" exact path to="/">Log In<span className="sr-only">(current)</span></Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" data-toggle="modal" data-target="#login-modal" exact path to="/">Sign Up</Link>
                </li>
              </ul>
            </div>
        </nav>

        <div className="modal fade hidden" id="login-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="loginmodal-container modal-content">
                    <h5>Login to Your Account</h5><br />
                    <form>
                        <input type="text" name="user" placeholder="Username" />
                        <input type="password" name="pass" placeholder="Password" />
                        <input type="submit" name="login" className="login loginmodal-submit" value="Login" />
                    </form>
                    <div className="login-help">
                        <Link exact path to="/">Forgot Password</Link>
                    </div>
                </div>
                <div className="loginmodal-container modal-content">
                    <h5>Sign up for Wayfarer!</h5><br/>
                    <form>
                        <input type="text" name="user" placeholder="Username" />
                        <input type="password" name="pass" placeholder="Password" />
                        <input type="password" name="pass2" placeholder="Confirm Password" />
                        <input type="submit" name="login" class="login loginmodal-submit" value="Login" />
                    </form>
                </div>
            </div>
        </div>
    </div>
   
            
          
        );
    }
}
 
export default NavBar;