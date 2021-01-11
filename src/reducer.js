import {INCREMENT, DECREMENT, RESET, FETCH_USERS} from './actions';

const initialState = {
    count: 0,
    users: []
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            };
        case RESET:
            return {
                ...state,
                count: 0
            };
        case FETCH_USERS:
            const newState = { ...state, users: action.payload };
            return newState;
        default:
            return state;
    }    
};

export default reducer;