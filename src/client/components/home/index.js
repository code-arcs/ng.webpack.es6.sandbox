import './home.css';

import register from '../../util/register.js';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './home.routes';

import Home from './home.directive';
import Greeting from './greeting.directive';
import RandomNames from './randomNames.service';

import ngRedux from 'ng-redux';

export default angular.module('app.home', [uirouter, ngRedux])
    .config(routing)
    .name;

register('app.home')
    .service('randomNames', RandomNames)
    .directive('home', ['randomNames','$ngRedux',  Home])
    .directive('greeting', ['$ngRedux', Greeting]);
