import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import Counter from './counter';

import reduxStore from "./store";

const App = () => {
    return (
        <Provider store={reduxStore}>
            <Counter />
        </Provider>        
    )
};

ReactDOM.render(<App />, document.getElementById('root'));