import { INCREMENT_COUNTER, DECREMENT_COUNTER, ADD_COUNTER } from '../actions/counter';

export default function counter(state = 0, action) {
    switch (action.type) {
        case INCREMENT_COUNTER:
            console.log(`INCREMENT:  ${state} + 1 `);
            return state + 1;
        case DECREMENT_COUNTER:
            console.log(`DECREMENT:  ${state} - 1 `);
            return state - 1;
        case ADD_COUNTER:
            console.log(`add:  ${state} - ${action.value} `);
            return state + action.value;
        default:
            return state;
    }
}
