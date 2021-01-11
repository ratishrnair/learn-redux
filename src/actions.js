import axios from 'axios';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';
export const FETCH_USERS = 'FETCH_USERS';

export const increment = () => ({
    type: INCREMENT
});

export const decrement = () => ({
    type: DECREMENT
});

export const reset = () => ({
    type: RESET
});

export const getApiUsers = () => async (dispatch) => {
    try {
        console.log('calling getApiUsers:: ');
        const resp = await axios.get('https://reqres.in/api/users?page=2');
        const data = await resp.data.data;
        console.log('getApiUsers data :: ', data);
        dispatch({type: FETCH_USERS, payload: data});
    }
    catch(error) {
        console.log('getApiUsers error::', error);
    }    
};