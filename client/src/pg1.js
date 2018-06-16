import React, { Component } from 'react';
import {Social2} from './components.js' ;
import sharta2 from './img/sharta2.png';
import plus from './img/plus.png';



class Pg1 extends Component {

    render() {
        return (
            <div className="container">
<div className="pg1">
<div className="container">
        <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6">
                <p4 className="m1">
                    H.H.'s
                    <br />
                    <b>Biography
                    </b>
                </p4>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6">
                <img src={sharta2} />
            </div>
        </div>
        <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6">
                <p style={{color:'white'}} className="m2">
                    <br /> The future, with it needs and
                    <br />challenges, call upon us to embark on
                    <br />a prepetual quest for alterntavie
                    <br />source of energy.
                </p >
            </div>
        </div>
        <div className="row">
        <div className="col-md-6"> </div>   
        <div className="col-md-3">

        <Social2 />
            </div>
        <div className="col-md-2" >
        <a href="#" className="plus">
                    <img src={plus} style={{ width: 30 }} />
                </a> </div>
          
        </div>
            
        
        </div>
        </div>
        </div>
        );
    }
}

export default Pg1 ;