import { combineReducers } from 'redux';
import feedData from '../store/feeds/reducer'
const reducers = combineReducers({
    feedData,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;