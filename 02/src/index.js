/**
 * Created by nalantianyi on 2016/12/29.
 */
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import todoApp from './reducers';
import App from './containers/App';

let store = createStore(todoApp);
let rootElement = document.getElementById('root');
render(
    <Provider store={store}>
        <App></App>
    </Provider>, rootElement
);