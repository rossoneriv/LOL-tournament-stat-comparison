import {combineReducers} from 'redux';
import tournament from './tournament';
import player from './player';
import record from './record';

const rootReducer = combineReducers({
    tournament,
    player,
    record
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;