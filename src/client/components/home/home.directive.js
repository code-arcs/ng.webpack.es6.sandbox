class Home {
    /*@ngInject*/
    constructor(randomNames) {
        this.restrict = 'E';
        this.template = require('./home.html');
        this.randomNames = randomNames;
    }

    link(scope) {
        scope.name = 'World';
        scope.changeName = () => {
            scope.name = 'angular-tips';
        };
        scope.randomName = () => {
            scope.name = this.randomNames.getName();
        }
    }
}

export default Home;
