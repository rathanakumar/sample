import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../store/reducers/RootReducer';

/* It creates a Redux store that holds the complete state of app.
 * Redux Thunk middleware allows to make async actions.
 * @params
 *  - initialState - object
 * @return
 *  - store - object
 */
export default function configureStore(initialState = {}) {
  const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

  return createStoreWithMiddleware(
    RootReducer,
    initialState,
  );
}
