import angular from 'angular';

class RandomNames {
  constructor() {
    this.names = ['Dennis', 'Stephan', 'Jonas', 'Georg'];
  }

  getName() {
    const totalNames = this.names.length;
    const rand = Math.floor(Math.random() * totalNames)
    return this.names[rand];
  }

}
  export default angular.module('services.random-names' , [])
    .service('randomNames', RandomNames)
    .name;
