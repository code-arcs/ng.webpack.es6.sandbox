import 'bootstrap/dist/css/bootstrap.css';


import angular from 'angular';
import uirouter from 'angular-ui-router';

import ngRedux from 'ng-redux';
import rootReducer from './client/reducers';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

import routing from './app.config';

import home from './client/components/home';

angular.module('app', [ngRedux, uirouter, home])
    .config(routing)
    .config(($ngReduxProvider) => {
        $ngReduxProvider.createStoreWith(rootReducer, [thunk]);
    });
