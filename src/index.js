import React, { createElement } from 'react';
import { createStore } from 'redux';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';

const ADD = 'ADD';

const store = createStore((state = 0, action) => {
    if (action.type === ADD) {
        return ++state;
    }
    return state;
});

const Connector = connect((state, { selector }) => {
    return selector(state);
})(function Connector({ children, ...rest }) {
    return children(rest);
});

function App() {
    return (
        <Connector selector={state => ({ state })}>
            {({ state, dispatch }) => {
                return (
                    <div>
                        {state}
                        <button
                            onClick={() => {
                                dispatch({ type: ADD });
                            }}
                        >
                            Add
                        </button>
                    </div>
                );
            }}
        </Connector>
    );
}

render(createElement(Provider, { store }, createElement(App)), document.querySelector('#app'));
