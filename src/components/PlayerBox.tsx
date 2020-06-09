import React from 'react';
import usePlayer from '../hooks/usePlayer';

type props = {
    id: number;
}

const PlayerBox = ({id}: props) => {
    const {players, selectedStat, maxStats} = usePlayer();

    return (
        <div>
            <h3>{players[id-1].Player}</h3>
            <div>
                {Object.keys(players[id-1]).length > 0 
                ? Object.keys(players[id-1]).map( stat => {
                    if(stat !== 'Player' && stat !== 'Position' && stat !== 'Team' && selectedStat.includes(stat)) {
                        const val = typeof(players[id-1][stat]) === 'number' ? players[id-1][stat] : Number( (players[id-1][stat]||'0').replace(/[^0-9.]/g, '') );
                        let mark = val === maxStats[stat] ? true : false;
                        return (
                            <div key={stat}>
                                {mark ? <div style={{color:'red'}}>* {stat} ({players[id-1][stat]}) </div> : <div>{stat} ({players[id-1][stat]})</div>}
                                <div>
                                    <progress value={val} max={maxStats[stat]}></progress>
                                </div>
                            </div>
                        )
                    }
                    return null;
                })
                : <div></div>}
            </div>
        </div>
    );
}

export default PlayerBox;