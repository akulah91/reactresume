import React, { Component } from 'react';
import './App.css';
import Cv from './Cv'
import {Button} from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Cv/>

    <Button onClick={()=>window.print()} className="fab" circular color='facebook' icon='print' />
      </div>
    );
  }
}

export default App;
