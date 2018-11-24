import { compose, applyMiddleware, createStore, combineReducers } from "redux";
import logger from "redux-logger";
// import { appReducer } from "./app";
import { votingReducer, votingEpic } from "./voting";
import { reducer as formReducer } from 'redux-form';
import { combineEpics, createEpicMiddleware  } from 'redux-observable';

const rootEpic = combineEpics(votingEpic);
const epicMiddleware = createEpicMiddleware();

const rootReducer = combineReducers(
    {
        // app: appReducer,
        voting: votingReducer,
        form: formReducer
    }
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(logger, epicMiddleware))
);

epicMiddleware.run(rootEpic);