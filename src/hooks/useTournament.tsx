import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as tournamentActions from '../modules/tournament';
import * as playerActions from '../modules/player';
import {RootState} from '../modules';

const useTournament = () => {
    const {pending, error, data} = useSelector((state: RootState) => state.tournament);
    const {tournament} = useSelector((state: RootState) => state.player);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(tournamentActions.getTournamentData(tournament));
        dispatch(playerActions.removeAll());
    }, [dispatch, tournament]);

    return {
        pending, error, data
    };
}

export default useTournament;