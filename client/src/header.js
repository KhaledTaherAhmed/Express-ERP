import React, { Component } from 'react';
import { Social } from './components.js'
import { Post } from './components.js'

class Header extends Component {
    state = {
        response: ''
      };
    
      componentDidMount() {
        this.callApi().then(res => this.setState({ response: res.express })).catch(err => console.log(err));
      }
    
      callApi = async () => {
        const response = await fetch('/api/hello');
        const body = await response.json();
    
        if (response.status !== 200) throw Error(body.message);
    
        return body;
      };

    render() {
        return (
            <div className="container">
                <div className="header">
                    <div className="container">

                        <div className="row">
                            <Post />
                        </div>
                        <div className="row">
                            <div className="col-md-3 col-md-offset-5 col-sm-3 col-sm-offset-5 col-xs-5 col-xm-offset-5 ">
                                <Social />
                            </div>
                        </div>
                    </div>
                </div >
                <p className="App-intro">{this.state.response}</p>
            </div>
        );
    }
}
export default Header;