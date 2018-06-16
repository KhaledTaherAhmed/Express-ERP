import React, { Component } from 'react';
import  Pg1  from './pg1.js'
import  Pg2  from './pg2.js'

class Homepage extends Component {
    render() {
        return (
            <div>
               
               <Pg1 />
               <Pg2 />

            </div>
        );
    }
}
export default Homepage;