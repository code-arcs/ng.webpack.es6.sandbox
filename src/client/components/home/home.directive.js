import * as CounterActions from '../../actions/counter';

class Home {
    constructor(randomNames, $ngRedux) {
        this.restrict = 'E';
        this.template = require('./home.html');
        this.randomNames = randomNames;
        this.ngRedux = $ngRedux;
    }

    link(scope) {
        const unsubscribe = this.ngRedux.connect(this.counterState, CounterActions)(this);
        scope.$on('$destroy', unsubscribe);

        scope.name = 'World';
        scope.changeName = () => {
            scope.name = 'angular-tips';
        };
        scope.randomName = () => {
            scope.name = this.randomNames.getName();
        };

        scope.add = this.add;
        scope.increment = this.increment;
        scope.decrement = this.decrement;
        scope.incrementIfOdd = this.incrementIfOdd;
        scope.incrementAsync = this.incrementAsync;
    }
    counterState(state) {
        return {
            value: state.counter
        };
    }


}

export default Home;
