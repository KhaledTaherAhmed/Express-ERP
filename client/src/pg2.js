import React, { Component } from 'react';
import {Social3} from './components.js' ;
import sharta3 from './img/sharta3.png';
import plus2 from './img/plus2.png';



class Pg2 extends Component {

    render() {
        return (
            <div className="container">
<div className="pg2">
<div className="container">
<div className="row">
                <div className="col-md-6">
                    <p6 className="m1" style={{color:'white'}}>
                        H.H.'s
                    </p6>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <b>
                        <p7 className="m1" style={{color:'#505153'}}>Quotes</p7>
                    </b>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">
                    <img src={sharta3} />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                <p style={{color: 'white'}} className="m2"  >
                        The future, with it needs and
                        <br />challenges, call upon us to embark on
                        <br />a prepetual quest for alterntavie
                        <br />source of energy.
                        </p> 
                </div>
            </div>
            <div className="row">
            <div className="col-md-3">
                    <Social3 />
                </div>
                <div className="col-md-2">
                <a href="#" className="plus">
                    <img src={plus2} style={{ width: 30 }} />
                </a>
                </div>
                
        </div>
        </div>
        </div>
        </div>
        );
    }
}

export default Pg2 ;