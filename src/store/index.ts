import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  ()=>{},
  undefined,
  composeWithDevTools(applyMiddleware(...[]))
);

export { store };