import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Homepage from './homepage';
import Biograpghy from './biography';
import './styles.css';

class App extends Component {

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
      <BrowserRouter>
      <Switch>
      <Route path='/biography' component={Biograpghy}/>
          <Route exact path='/' component={Homepage}/>
          </Switch>
          </BrowserRouter>

                );
  }
}

export default App;
