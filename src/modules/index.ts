import {combineReducers} from 'redux';
import tournament from './tournament';
import player from './player';

const rootReducer = combineReducers({
    tournament,
    player
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;