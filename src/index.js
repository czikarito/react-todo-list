import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './store/store';
import ScreensRoot from './screens/Root';

ReactDOM.render(<ScreensRoot store={store} />, document.getElementById('root'));
