import React from 'react';
import {render} from 'react-dom';
import './css/style.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import StorePicker from './StorePicker'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';

const Root = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={StorePicker} />
        <Route path="/:storeId" component={App} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

render(<Root />, document.getElementById('main'));
registerServiceWorker();
