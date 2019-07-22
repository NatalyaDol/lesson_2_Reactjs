import React from 'react';
import ReactDOM from 'react-dom';

import { developer, developerVanya } from './developer';



class App extends React.Component {
  render() {
    return <div>
      <h1>Первое приложение на React</h1>
      <p>Hello React!</p>
      <p>developerFirst</p>
    </div>
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));