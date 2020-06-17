import {createAction} from 'redux-actions';
import {ActionType, createReducer} from 'typesafe-actions';

const ADD_PLAYER = 'player/ADD_PLAYER';
const REMOVE_PLAYER = 'player/REMOVE_PLAYER';
const REMOVE_ALL = 'player/REMOVE_ALL';
const CHANGE_SELECTED_STAT = 'player/CHANGE_SELECTED_STAT';
const ALL_CHECK_SELECTED_STAT = 'player/ALL_CHECK_SELECTED_STAT';
const CHANGE_TOURNAMNET = 'player/CHANGE_TOURNAMENT';
const CHANGE_STAT = 'record/CHANGE_STAT';
const SELECT_POSITION = 'record/SELECT_POSITION';

export const addPlayer = createAction(ADD_PLAYER, (id: number, player: object) => ({id, player}));
export const removePlayer = createAction(REMOVE_PLAYER, (id: number) => id);
export const removeAll = createAction(REMOVE_ALL);
export const changeSelectedStat = createAction(CHANGE_SELECTED_STAT, (flag: boolean, stat: string) => ({flag, stat}));
export const allCheckSelectedStat = createAction(ALL_CHECK_SELECTED_STAT);
export const changeTournament = createAction(CHANGE_TOURNAMNET, (tournament: string) => tournament);
export const changeStat = createAction(CHANGE_STAT, (stat: string, id: number) => ({stat, id}));
export const selectPosition = createAction(SELECT_POSITION, (position: string) => position);

const actions = {addPlayer, removePlayer, removeAll, changeSelectedStat, allCheckSelectedStat, changeTournament, changeStat, selectPosition};
type playerAction = ActionType<typeof actions>;

type playerState = {
    players: {[index: string]:any};
    maxStats: {[index: string]:any};
    statList: stat[];
    selectedStat: string[];
    tournament: string;
    recordStat: string[];
    recordPosition: string;
}

type stat = {
    name: string,
    desc: string
}

const initialState = {
    players: [{}, {}, {}, {}, {}],
    maxStats: {},
    statList: [ {name: 'Games', desc: ''},
                {name: 'Win rate', desc: ''},
                {name: 'KDA', desc: ''},
                {name: 'Avg kills', desc: ''},
                {name: 'Avg deaths', desc: ''},
                {name: 'Avg assists', desc: ''},
                {name: 'CSM', desc: 'Average CS per minute per game'},
                {name: 'GPM', desc: 'Average Gold per minute per game'},
                {name: 'KP%', desc: 'Average Kill Participation per game'},
                {name: 'DMG%', desc: 'Average share of team\'s total damage to champions per game'},
                {name: 'DPM', desc: 'Average damage to champions per minute per game'},
                {name: 'VSPM', desc: 'Average Vision score per minute per game'},
                {name: 'Avg WPM', desc: 'Average Wards per minute per game'},
                {name: 'Avg WCPM', desc: 'Average Wards cleared per minute per game'},
                {name: 'Avg VWPM', desc: 'Average Vision wards per minute per game'},
                {name: 'GD@15', desc: 'Average Gold differential at 15 min'},
                {name: 'CSD@15', desc: 'Average CS differential at 15 min'},
                {name: 'XPD@15', desc: 'Average XP differential at 15 min'},
                {name: 'FB %', desc: 'Firstblood participation(kill or assist)'},
                {name: 'FB Victim', desc: 'Firstblood victim %'},
                {name: 'Penta Kills', desc: 'Total pentakills'},
                {name: 'Solo Kills', desc: 'Total solokills'}
            ],
    selectedStat: ['Games','Win rate','KDA','Avg kills','Avg deaths','Avg assists','KP%','DMG%','DPM'],
    tournament: 'Mid-Season Cup 2020',
    recordStat: ['KDA', 'KP%', 'DPM', 'GPM', 'Solo Kills'],
    recordPosition: '',
}

const getNewMaxStats = (players: any, statList: stat[]) => {
    let maxStats: {[k: string]: any} = {};
    for(let i=0; i<statList.length; i++){
        maxStats[statList[i].name] = 
            Math.max( typeof(players[0][statList[i].name]) === 'number' ? players[0][statList[i].name] : Number((players[0][statList[i].name]||'0').replace(/[^0-9.]/g, ''))
                    , typeof(players[1][statList[i].name]) === 'number' ? players[1][statList[i].name] : Number((players[1][statList[i].name]||'0').replace(/[^0-9.]/g, ''))
                    , typeof(players[2][statList[i].name]) === 'number' ? players[2][statList[i].name] : Number((players[2][statList[i].name]||'0').replace(/[^0-9.]/g, ''))
                    , typeof(players[3][statList[i].name]) === 'number' ? players[3][statList[i].name] : Number((players[3][statList[i].name]||'0').replace(/[^0-9.]/g, ''))
                    , typeof(players[4][statList[i].name]) === 'number' ? players[4][statList[i].name] : Number((players[4][statList[i].name]||'0').replace(/[^0-9.]/g, ''))
                    );
    }
    return maxStats;
}

const player = createReducer<playerState, playerAction>(initialState, {
    [ADD_PLAYER]: (state, action) => {
        let count = 0;
        const newPlayers = state.players.map((p: any) => {
            count++;
            return count === action.payload.id ? action.payload.player : p;
        });
        return {...state, players: newPlayers, maxStats: getNewMaxStats(newPlayers, state.statList)}
    },
    [REMOVE_PLAYER]: (state, action) => {
        let newPlayers = state.players.slice();
        newPlayers.splice(action.payload-1, 1);
        newPlayers.push({});
        return {...state, players: newPlayers, maxStats: getNewMaxStats(newPlayers, state.statList)}
    },
    [REMOVE_ALL]: (state) => ({...state, players: [{}, {}, {}, {}, {}]}),
    [CHANGE_SELECTED_STAT]: (state, action) => {
        const {flag, stat} = action.payload;
        if(flag){
            return {...state, selectedStat: [...state.selectedStat, stat]}
        }
        else {
            return {...state, selectedStat: state.selectedStat.filter(item => item !== stat)}
        }
    },
    [ALL_CHECK_SELECTED_STAT]: (state) => {
        const selectedStat = state.statList.length !== state.selectedStat.length ?
                                state.statList.map(item => item.name) :
                                [];
        return {
            ...state,
            selectedStat: selectedStat
        }
    },
    [CHANGE_TOURNAMNET]: (state, action) => {
        return {
            ...state,
            tournament: action.payload
        }
    },
    [CHANGE_STAT]: (state, action) => {
        return {...state, recordStat: [...state.recordStat.map((s, i) => {
            if(i === action.payload.id)  return action.payload.stat;
            else return s;
        })]}
    },
    [SELECT_POSITION]: (state, action) => {
        return {...state, recordPosition: action.payload.position}
    },
});

export default player;