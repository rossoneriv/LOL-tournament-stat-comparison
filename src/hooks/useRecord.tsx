import {useEffect} from 'react';
import * as tournamentActions from '../modules/tournament';
import {useDispatch, useSelector} from 'react-redux';
import * as recordActions from '../modules/record';
import {RootState} from '../modules';

const usePlayer = () => {
    const {recordStat, recordPosition, sortCondition, showRegular} = useSelector((state: RootState) => state.record);
    const {data} = useSelector((state: RootState) => state.tournament);
    const {tournament} = useSelector((state: RootState) => state.player);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(tournamentActions.getTournamentData(tournament));
        dispatch(recordActions.selectPosition(''));
    }, [dispatch, tournament]);

    const handleChangeStat = (stat: string, id: number) => {
        dispatch(recordActions.changeStat(stat , id));
    }

    const handleSelectPosition = (position: string) => {
        dispatch(recordActions.selectPosition(position));
    }

    const handleAddSortCondition = (stat: string) => {
        dispatch(recordActions.addSortCondition(stat));
    }

    const handleToggleShowRegular = () => {
        dispatch(recordActions.toggleShowRegular());
    }

    return {
        recordStat, recordPosition, sortCondition, showRegular, data, handleChangeStat, handleSelectPosition, handleAddSortCondition, handleToggleShowRegular
    };
}

export default usePlayer;