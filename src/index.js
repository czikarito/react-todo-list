import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from "react-redux";
import store from "./redux/store";
import ScreensRoot from './screens/Root';

ReactDOM.render(<ScreensRoot store={store} />, document.getElementById('root'));
