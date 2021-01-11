import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from "./reducer";
import { loggerMiddleware, validationMiddleware } from "./middlewares";

const store = createStore(reducer, applyMiddleware(thunk, validationMiddleware, loggerMiddleware));

export default store;