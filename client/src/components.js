import React, { Component } from 'react';
import sharta from './img/sharta.png';
import sharta2 from './img/sharta2.png';
import khat from './img/5at.png';
import fb from './img/fb.png';
import tw from './img/tw.png';
import ins from './img/insta.png';
import whats from './img/whats.png';
import tele from './img/tele.png';
import fb2 from './img/fb2.png';
import tw2 from './img/tw2.png';
import whats2 from './img/whats2.png';
import tele2 from './img/tele2.png';
import plus from './img/plus.png';
import plus2 from './img/plus2.png';
import andr from './img/andr.png';
import appl from './img/appl.png';


import './styles.css';

export class Social extends Component {
    render() {
        return (
            <div>
                <a href="https://fb.com" style={{ margin: 2 }}>
                    <img src={fb} style={{ width: 20 }} />
                </a>
                <a href="https://twitter.com" style={{ margin: 2 }}>
                    <img src={tw} styl={{ width: 20 }} />
                </a>
                <a href="https://instagram.com" style={{ margin: 2 }}>
                    <img src={ins} style={{ width: 20 }} />
                </a>
            </div>
        );
    }
}


export class Text extends Component {
    render() {
        return (
            <div>
                <p class={this.props.class} style={{ color: this.props.color, size: this.props.size }} >
                    {this.props.value}
                </p>
            </div>

        );
    }
}

var text1 = "The future, with it needs and challenges, call upon us to embark on a prepetual quest for alterntavie source of energy.";
var text2 = "From a speach deliverd at the student planting forum 2007"
export class Post extends Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-7 col-sm-10 col-xs-12">
                        <Text value="✦" class="m" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-7 col-sm-12 col-xs-12">
                        <Text value={text1} class="m">
                        </Text>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-7 col-sm-10 col-xs-12">
                        <img src={sharta} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-1 col-sm-1 col-xs-1">
                        <Text value="1/3" class="m1"></Text>                    </div>

                    <div className="col-md-1 col-sm-1 col-xs-1">
                        <img src={khat} />
                    </div>

                    <div className="col-md-10 col-sm-10 col-xs-15">
                        <Text value={text2} class="m2"></Text>
                    </div>
                </div>
            </div>
        );
    }
}

export class Social2 extends Component {

    render() {
        return (
            <div>
                <a href="https://fb.com" >
                    <img src={fb} style={{ width: 25, margin: 5 }} />
                </a>
                <a href="https://twitter.com" >
                    <img src={tw} style={{ width: 30, margin: 5 }} />
                </a>
                <a href="https://web.whatsapp.com" >
                    <img src={whats} style={{ width: 30, margin: 5 }} />
                </a>
                <a href="https://telegram.com" >
                    <img src={tele} style={{ width: 30, margin: 5 }} />
                </a>
             
            </div>
        );
    }
}

export class Social3 extends Component {

    render() {
        return (
            <div>
                <a href="https://fb.com" >
                    <img src={fb2} style={{ width: 30, margin: 5 }} />
                </a>
                <a href="https://twitter.com" >
                    <img src={tw2} style={{ width: 30, margin: 5 }} />
                </a>
                <a href="https://web.whatsapp.com" >
                    <img src={whats2} style={{ width: 30, margin: 5 }} />
                </a>
                <a href="https://telegram.com" >
                    <img src={tele2} style={{ width: 30, margin: 5 }} />
                </a>
               
            </div>
        );
    }
}

export class Social4 extends Component {

    render() {
        return (
            <div>
                <a href="https://android.com" >
                    <img src={andr} style={{ width: 30, margin: 5 }}/>
                </a>
                <a href="https://apple.com" >
                    <img src={appl} style={{ width: 30, margin: 5 }}/>
                </a>
            </div>
        );
    }
}


export default Social2;