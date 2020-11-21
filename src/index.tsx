import './bootstrapper';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {AppRoot, Root} from './components/AppRoot';

ReactDOM.render(
  <Root />,
  document.getElementById('appRoot')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
