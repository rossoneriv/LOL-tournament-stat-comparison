import {createAction} from 'redux-actions';
import {ActionType, createReducer} from 'typesafe-actions';

const CHANGE_STAT = 'record/CHANGE_STAT';
const SELECT_POSITION = 'record/SELECT_POSITION';
const ADD_SORT_CONDITION = 'record/ADD_SORT_CONDITION';
const RESET_SORT_CONDITION = 'record/RESET_SORT_CONDITION';
const TOGGLE_SHOW_REGULAR = 'record/TOGGLE_SHOW_REGULAR';

export const changeStat = createAction(CHANGE_STAT, (stat: string, id: number) => ({stat, id}));
export const selectPosition = createAction(SELECT_POSITION, (position: any) => position);
export const addSortCondition = createAction(ADD_SORT_CONDITION, (stat: string) => stat);
export const resetSortCondition = createAction(RESET_SORT_CONDITION);
export const toggleShowRegular = createAction(TOGGLE_SHOW_REGULAR);

const actions = {changeStat, selectPosition, addSortCondition};
type recordAction = ActionType<typeof actions>;

type recordState = {
    recordStat: string[];
    recordPosition: string;
    sortCondition: sortCondition[];
    showRegular: boolean;
}

type sortCondition = {
    stat: string;
    asc: boolean;
}

const initialState = {
    recordStat: ['KDA', 'KP%', 'DPM', 'GPM', 'Solo Kills'],
    recordPosition: '',
    sortCondition: [],
    showRegular: false,
}

const player = createReducer<recordState, recordAction>(initialState, {
    [CHANGE_STAT]: (state, action) => {
        return {...state, recordStat: [...state.recordStat.map((s, i) => {
            if(i === action.payload.id)  return action.payload.stat;
            else return s;
        })]}
    },
    [SELECT_POSITION]: (state, action) => {
        return {...state, recordPosition: action.payload}
    },
    [ADD_SORT_CONDITION]: (state, action) => {
        if(state.sortCondition.find((o: sortCondition) => (o.stat === action.payload && !o.asc))){
            const delSortCondition = state.sortCondition.find((o: sortCondition) => (o.stat === action.payload));
            if(delSortCondition) {
                const newSortCondition = state.sortCondition.slice();
                newSortCondition.splice(state.sortCondition.indexOf(delSortCondition), 1);
                return {...state, sortCondition: [...newSortCondition, {stat: action.payload, asc: true}]};
            }
            else return {...state};
        } else if(state.sortCondition.find((o: sortCondition) => (o.stat === action.payload && o.asc))){
            const delSortCondition = state.sortCondition.find((o: sortCondition) => (o.stat === action.payload));
            if(delSortCondition) {
                const newSortCondition = state.sortCondition.slice();
                newSortCondition.splice(state.sortCondition.indexOf(delSortCondition), 1);
                return {...state, sortCondition: newSortCondition};
            }
            else return {...state};
        } 
        else return {...state, sortCondition: [...state.sortCondition, {stat: action.payload, asc: false}]}
    },
    [RESET_SORT_CONDITION]: (state) => {
        return {...state, sortCondition: []}
    },
    [TOGGLE_SHOW_REGULAR]: (state) => {
        return {...state, showRegular: !state.showRegular}
    }
});

export default player;