import { createStore, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/'

const win = window
const middlewares = [];
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(thunk);
}

const storeEnhancers = compose(
  applyMiddleware(...middlewares),
  (win && win.__REDUX_DEVTOOLS_EXTENSION__) ? win.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
);

export default createStore(rootReducer, {}, storeEnhancers);
// 打开浏览器拓展配置 Redux-DevTools
// export default createStore(rootReducer, applyMiddleware(thunk));