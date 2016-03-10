export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const ADD_COUNTER = 'ADD_COUNTER';

export function increment() {
    return {
        type: INCREMENT_COUNTER
    };
}

export function decrement() {
    return {
        type: DECREMENT_COUNTER
    };
}

export function add(value=1) {
    return {
        type: ADD_COUNTER,
        value: value
    };
}
export function incrementIfOdd() {
    return (dispatch, getState) => {
        const { counter } = getState();

        if (counter % 2 === 0) {
            return;
        }

        dispatch(increment());
    };
}

export function incrementAsync(delay = 1000) {
    return dispatch => {
        setTimeout(() => {
            dispatch(increment());
        }, delay);
    };
}
