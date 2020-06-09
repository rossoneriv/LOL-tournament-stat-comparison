import {useDispatch, useSelector} from 'react-redux';
import * as playerActions from '../modules/player';
import {RootState} from '../modules';

const usePlayer = () => {
    const {players, maxStats, selectedStat, statList, tournament} = useSelector((state: RootState) => state.player);
    const {data} = useSelector((state: RootState) => state.tournament);
    const dispatch = useDispatch();

    const handleAddPlayer = (e: any, id: number) => {
        dispatch(playerActions.addPlayer(id, e.data));
    }

    const handleRemoveSelect = (id: number) => {
        dispatch(playerActions.removePlayer(id));
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(playerActions.changeTournament(e.target.value));
    }

    const handleChangeCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(playerActions.changeSelectedStat(e.target.checked, e.target.id));
    }

    const handleAllCheck = () => {
        dispatch(playerActions.allCheckSelectedStat());
    }

    return {
        players, maxStats, selectedStat, statList, tournament, data, handleAddPlayer, handleRemoveSelect, handleChange, handleChangeCheck, handleAllCheck
    };
}

export default usePlayer;