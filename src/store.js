import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { questionsReducer } from './domains/questions';

const composeEnhancers = composeWithDevTools({
  name: 'Interview',
});

const rootReduces = combineReducers({
  questions: questionsReducer,
});

export default (initialState) => createStore(
  rootReduces,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
