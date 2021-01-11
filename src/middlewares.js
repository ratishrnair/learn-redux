import {INCREMENT, DECREMENT, RESET, FETCH_USERS} from './actions';

export const loggerMiddleware = store => next => action => {
    console.log("STATE BEFORE", store.getState());
    console.log("ACTION DISPATCHED", action);
    next(action);
    console.log("STATE AFTER", store.getState());
};

export const validationMiddleware = store => next => action => {
    console.log("validationMiddleware", action);
    if (action.type === INCREMENT || action.type === DECREMENT || action.type === FETCH_USERS) {
        console.log("ACTION IS VALID");
        next(action);
    } else {
        console.log("ACTION IS NOT VALID");
    }
};