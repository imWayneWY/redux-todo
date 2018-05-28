import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Container from './containers/index'
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { RootReducer } from './reducers/index';

const store = createStore(RootReducer);
ReactDOM.render(
                    <Provider store = {store}>
                        <Container />
                    </Provider>,
                     document.getElementById('root')
                );
registerServiceWorker();
