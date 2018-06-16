import React, { Component } from 'react';
import {Social2} from './components.js' ;
import {Social4} from './components.js' ;
import logo from './img/logo.png';


class Footer extends Component {

    render() {
        return (

            <div className="container">
            <footer>
            <div className="container">
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-2 ">
                    <img src={logo} />
                </div>
                <div className="col-md-2">
                    <p2>Social
                        <br />
                    </p2>
                    <Social2 />
                </div>
                <div className="col-md-2">
                    <p2>Mobile App</p2>
                    <br />
                 <Social4 />
                </div>
            </div>

           
            </div>

             
        </footer>
        <nav className="navbar navbar-inverse">
                <div className="container">
                    <div className="navbar-header">
                    </div>
                    <ul class="nav navbar-nav">
                        <li>
                            <a href="#">Bio</a>
                        </li>
                        <li>
                            <a href="#">Gallery</a>
                        </li>
                        <li>
                            <a href="#">News</a>
                        </li>
                        <li>
                            <a href="#">Contacts</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
            
        );
    }
}

export default Footer