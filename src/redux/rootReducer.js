import { combineReducers } from 'redux';
import { books } from './bookApp/reducers';

const rootReducer = combineReducers({
   books,
});

export default rootReducer;