import React from 'react';
import {render} from 'react-dom';
import './css/style.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import StorePicker from './StorePicker'

const Root = () => {
  return (
    <StorePicker />
  )
}

render(<App />, document.getElementById('main'));
registerServiceWorker();
