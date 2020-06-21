import React from 'react';
import styled from 'styled-components';
import styledComponentsTS from 'styled-components-ts';
import Badge from 'react-bootstrap/Badge';

import usePlayer from '../../hooks/usePlayer';

type props = {
    id: number;
}

const PlayerBox = ({id}: props) => {
    const {players, selectedStat, maxStats} = usePlayer();

    return (
        <PlayerBoxDiv>
            <div>
                {Object.keys(players[id-1]).length > 0 
                ? Object.keys(players[id-1]).map( stat => {
                    if(stat !== 'Player' && stat !== 'Position' && stat !== 'Team' && selectedStat.includes(stat)) {
                        const val: number = typeof(players[id-1][stat]) === 'number' ? players[id-1][stat] : Number( (players[id-1][stat]||'0').replace(/[^0-9.]/g, '') );
                        let mark = val === maxStats[stat] ? true : false;
                        return (
                            <ProgressWrap key={stat}>
                                {mark ? 
                                    <div>
                                        <small>
                                            <b>{stat} ({players[id-1][stat]})  </b>
                                            <BadgeWrap>     <Badge variant="dark">best</Badge>      </BadgeWrap>
                                        </small>
                                    </div> : 
                                    <div><small>{stat} ({players[id-1][stat]})</small></div>
                                }
                                <ProgressDiv>
                                    <Progress maxStat={maxStats[stat]} val={val} id={id} mark={mark}></Progress>
                                </ProgressDiv>
                            </ProgressWrap>
                        )
                    }
                    return null;
                })
                : <div></div>}
            </div>
        </PlayerBoxDiv>
    );
}


// styled-components
const ProgressWrap = styledComponentsTS<any>(styled.div).attrs(props => ({
    key: props.key
}))`
    padding: .35rem .5rem .35rem .5rem
`;

const ProgressDiv = styled.div`
    background-color: #E9E9E9;
    border-radius: .5rem;
`;

const Progress = styledComponentsTS<any>(styled.div)`
    width: calc(100% * ${props =>props.val} / ${props => props.maxStat});
    height: 10px;
    background-color: ${({id, mark}) => {
        let color = '';
        switch(id){
            case 1: if(mark) color= '#e03131'; else color= '#ff8787'; break;
            case 2: if(mark) color= '#f76707'; else color= '#ffc078'; break;
            case 3: if(mark) color= '#099268'; else color= '#63e6be'; break;
            case 4: if(mark) color= '#3b5bdb'; else color= '#91a7ff'; break;
            case 5: if(mark) color= '#6741d9'; else color= '#b197fc'; break;
        }
        return color;
    }};
    border-radius: 1rem;
    transition: 1s ease;
    transitionDelay: 0.5s;
`;

const BadgeWrap = styled.span`
    @media screen and (max-width: 1280px) {
        display: none;
    }
`;

const PlayerBoxDiv = styled.div`
    padding: 1rem 0 1rem 0;
`;

export default PlayerBox;