import React from 'react';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import styledComponentsTS from 'styled-components-ts';

import useRecord from '../../hooks/useRecord';
import usePlayer from '../../hooks/usePlayer';
import {getSortedPlayerList} from '../common';

const StatRanking = () => {
    const {recordStat, recordPosition, data, handleChangeStat} = useRecord();
    const {statList} = usePlayer();

    return (
        <RankBoxWrap>
            <h3><RankBoxTitle>Stat Ranking</RankBoxTitle></h3>
            <RankBox>
            {recordStat.map((item, idx) => {
                return (
                    <StatRankingWrap key={`${item}_${idx}`}>
                        <Form.Control as='select' size='sm' onChange={(e) => {handleChangeStat(e.currentTarget.value, idx)}} value={recordStat[idx]}>
                            {getNotSelectedStat(item, statList, recordStat).map(list => <option key={list.name}>{list.name}</option>)}
                        </Form.Control>

                        {data.length > 0 ? getSortedPlayerList(item, JSON.parse(JSON.stringify(data)), recordPosition, true, null).map((p: any, i: number) => {
                            if(i < 5){
                                if(i === 0)  return(
                                    <StatRankFirst key={`${p.Player}_${p.Position}`}><b> {i+1}</b>
                                        <ImgWrap>
                                            <img src={`player/${p.Player}.png`} 
                                                alt={p.Player} 
                                                onError={(e)=>{
                                                    e.currentTarget.onerror = null; 
                                                    e.currentTarget.src='player/noplayer.png'
                                                }}
                                            />
                                        </ImgWrap>
                                        <FirstRankPlayer>
                                            <b>{p.Player}</b><br/>
                                            <FisrtRankPlayerStat>{p[item]}</FisrtRankPlayerStat>
                                        </FirstRankPlayer>
                                    </StatRankFirst>
                                );

                                let backColor = ''
                                if(i%2 === 0) backColor= 'white';
                                else         backColor= '#f1f3f5';
                                return (
                                    <StatRankOthers key={`${p.Player}_${p.Position}`} backColor={backColor}>
                                        <div>{i+1}{'\u00A0'}{'\u00A0'}</div>
                                        <div>{p.Player}</div>
                                        <OtherRankPlayerStat>{p[item]}</OtherRankPlayerStat>
                                    </StatRankOthers>
                                );
                            }
                            else return null;
                        }) : null}
                    </StatRankingWrap>
                );
            })}
            </RankBox>
        </RankBoxWrap>
    );
}

const getNotSelectedStat = (item: string, statList: { name: string; desc: string; }[], recordStat: string[]) => {
    const filterdList = recordStat.filter(stat => stat !== item);
    return statList.filter(stat => !filterdList.includes(stat.name));
}

const StatRankingWrap = styled.section`
    float: left;
    display: inline-block;
    margin: 10px;
    width: 210px;
`;

const ImgWrap = styled.div`
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 50%;
    margin: 1rem .3rem .3rem .3rem;
    border: 1px inset;
`;

const StatRankFirst = styled.div`
    display: flex;
    border: solid 0.5px;
    border-color: #e0e0e0;
    padding: 0.5rem 0.65rem;
`;

const StatRankOthers = styledComponentsTS<any>(styled.div)`
    border: solid 0.5px;
    border-color: #e0e0e0;
    display: flex;
    padding: 0.25rem 0.65rem;
    background-color: ${({backColor}) => {
        return backColor;
    }};
`;

const RankBoxWrap = styled.div`
    display: flex;
    flex-direction: column;
`;

const RankBoxTitle = styled.span`
    padding: 0.1rem 2rem;
    font-weight: bold;
`;

const RankBox = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0 1.5rem;
    flex-wrap: wrap;
    overflow-y: auto;
    justify-content: center;
`;

const FirstRankPlayer = styled.span`
    align-self: center;
    text-align: center;
    flex-grow: 10;
`;

const FisrtRankPlayerStat = styled.b`
    color: #7048e8;
`;

const OtherRankPlayerStat = styled.div`
    text-align: right;
    width: -webkit-fill-available;
`;

export default StatRanking;