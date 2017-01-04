/**
 * Created by nalantianyi on 2017/1/4.
 */
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from '../configureStore';
import AsyncApp from './AsyncApp';

const store = configureStore();
export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <AsyncApp></AsyncApp>
            </Provider>
        );
    }

}