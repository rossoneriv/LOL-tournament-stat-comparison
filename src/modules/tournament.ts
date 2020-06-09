import {createAction} from 'redux-actions';
import {createAsyncAction, ActionType, createReducer} from 'typesafe-actions';
import axios, {AxiosResponse} from 'axios';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '.';

async function getTournamentDataAPI(tournament: string) {
    return await axios.get(`jsonData/${tournament}.json`);
}

const GET_TOURNAMENT_DATA_PENDING = 'tournament/GET_TOURNAMENT_DATA_PENDING';
const GET_TOURNAMENT_DATA_SUCCESS = 'tournament/GET_TOURNAMENT_DATA_SUCCESS';
const GET_TOURNAMENT_DATA_FAILURE = 'tournament/GET_TOURNAMENT_DATA_FAILURE';
const CHANGE_TOURNAMNET = 'tournament/CHANGE_TOURNAMENT';

export const getTournamentDataAsync = createAsyncAction(
    GET_TOURNAMENT_DATA_PENDING,
    GET_TOURNAMENT_DATA_SUCCESS,
    GET_TOURNAMENT_DATA_FAILURE
)<undefined, AxiosResponse, boolean>();

export function getTournamentData(tournament: string): ThunkAction<void, RootState, null, TournamentAction> { 
    return async dispatch => {
        const {request, success, failure} = getTournamentDataAsync;
        dispatch(request());
        try{
            const response = await getTournamentDataAPI(tournament);
            dispatch(success(response));
        } catch(error) {
            console.log(error);
            dispatch(failure(true));
            throw(error);
        }
    };
}
export const changeTournament = createAction(CHANGE_TOURNAMNET, (tournament: string) => tournament);



type TournametState = {
    pending: boolean;
    error: boolean;
    data: Object[];
}

type TournamentAction = ActionType<typeof getTournamentDataAsync>;





const initialState: TournametState = {
    pending: false,
    error: false,
    data: [],
}


const tournament = createReducer<TournametState, TournamentAction>(initialState, {
    [GET_TOURNAMENT_DATA_PENDING] : state => ({
        ...state,
        pending: true,
        error: false
    }),
    [GET_TOURNAMENT_DATA_SUCCESS] : (state, action) => ({
        ...state,
        pending: false,
        data: action.payload.data
    }),
    [GET_TOURNAMENT_DATA_FAILURE]: state => ({
        ...state,
        pending: false,
        error: true
    })
})

export default tournament;