import './home.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './home.routes';
import home from './home.directive';
import randomNames from './randomNames.service';
import greeting from './greeting.directive';

export default angular.module('app.home', [uirouter, randomNames, greeting, home])
    .config(routing)
    .name;
