import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { questionsReducer } from './domains/questions';
import { applicantsReducer } from './domains/applicants';
import { externalsReducer } from './domains/externals';

const composeEnhancers = composeWithDevTools({
  name: 'Interview',
});

const rootReduces = combineReducers({
  questions: questionsReducer,
  applicants: applicantsReducer,
  externals: externalsReducer,
});

export default (initialState) => createStore(
  rootReduces,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
