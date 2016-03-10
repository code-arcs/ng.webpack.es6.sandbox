import * as CounterActions from '../../actions/counter';

class Greeting {
    constructor($ngRedux) {
        this.scope = true;
        this.restrict = 'E';
        this.template = '<div><h1>Hello, {{name}}</div>{{value}} <br>   <button ng-click="increment()">+</button>';
        this.ngRedux = $ngRedux;
    }
    link(scope) {
        console.log("actions", CounterActions);
        const unsubscribe = this.ngRedux.connect(this.counterState, CounterActions)(scope);
        scope.$on('$destroy', unsubscribe);
    }
    counterState(state) {
        return {
            value: state.counter
        };
    }
}

export default Greeting;
