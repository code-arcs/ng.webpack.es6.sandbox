import angular from 'angular';

import randomNames from './randomNames.service';

function home(randomNames) {
  return {
    restrict: 'E',
    template: require('./home.html'),
    link: (scope) => {
      scope.name = 'World';
      scope.changeName = name => {
          scope.name = 'angular-tips';
      }
      scope.randomName = () => {
         scope.name = randomNames.getName();
      }
    }
  }
}

export default angular.module('home' , [randomNames])
  .directive('home', home)
  .name;
