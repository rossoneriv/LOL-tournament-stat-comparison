import React from 'react';
import {MainContainer, MainWrapper, Footer} from './common';
import Form from 'react-bootstrap/Form';
import usePlayer from '../hooks/usePlayer';
import useRecord from '../hooks/useRecord';
import styled from 'styled-components';
import styledComponentsTS from 'styled-components-ts';
import CommonHeader from './CommonHeader';

const Record = () => {
    const {statList} = usePlayer();
    const {recordStat, recordPosition, sortCondition, showRegular, data, handleChangeStat, handleSelectPosition, handleAddSortCondition, handleToggleShowRegular} = useRecord();

    return(
        <>
            <CommonHeader/>
            
            <MainContainer>
                <MainWrapper>
                    <div style={{display:'flex', flexDirection:'column'}}>
                        <div style={{display:'flex', alignSelf:'center'}}>
                            <IconWrapper>
                                <img src={`position/ALL.png`} alt={'ALL'} onClick={() => {handleSelectPosition('')}} style={{alignSelf:'center'}}></img>
                            </IconWrapper>
                            <IconWrapper>
                                <img src={`position/TOP.png`} alt={'TOP'} onClick={() => {handleSelectPosition('TOP')}} style={{alignSelf:'center'}}></img>
                            </IconWrapper>
                            <IconWrapper>
                                <img src={`position/JUNGLE.png`} alt={'JUNGLE'} onClick={() => {handleSelectPosition('JUNGLE')}} style={{alignSelf:'center'}}></img>
                            </IconWrapper>
                            <IconWrapper>
                                <img src={`position/MID.png`} alt={'MID'} onClick={() => {handleSelectPosition('MID')}} style={{alignSelf:'center'}}></img>
                            </IconWrapper>
                            <IconWrapper>
                                <img src={`position/ADC.png`} alt={'ADC'} onClick={() => {handleSelectPosition('ADC')}} style={{alignSelf:'center'}}></img>
                            </IconWrapper>
                            <IconWrapper>
                                <img src={`position/SUPPORT.png`} alt={'SUPPORT'} onClick={() => {handleSelectPosition('SUPPORT')}} style={{alignSelf:'center'}}></img>
                            </IconWrapper>
                        </div>
                        <div style={{display:'flex', flexDirection:'column'}}>
                            <span style={{padding:'0.1rem 2rem'}}><h3><b>Stat Ranking</b></h3></span>
                            <div style={{display:'flex', flexDirection:'row', padding:'0 1.5rem', flexWrap: 'wrap', overflowY: 'auto'}}>
                            {recordStat.map((item, idx) => {
                                return (
                                    <StatRankingWrap key={`${item}_${idx}`}>
                                        <Form.Control as='select' size='sm' onChange={(e) => {handleChangeStat(e.currentTarget.value, idx)}} value={recordStat[idx]}>
                                            {getNotSelectedStat(item, statList, recordStat).map(list => <option key={list.name}>{list.name}</option>)}
                                        </Form.Control>

                                        {data.length > 0 ? getSortedPlayerList(item, JSON.parse(JSON.stringify(data)), recordPosition, true, null).map((p: any, i: number) => {
                                            if(i < 5){
                                                if(i === 0)  return(
                                                    <StatRankFirst><b> {i+1}</b>
                                                        <ImgWrap>
                                                            <img src={`player/${p.Player}.png`} alt={p.Player} 
                                                            onError={(e)=>{e.currentTarget.onerror = null; e.currentTarget.src='player/noplayer.png'}} />
                                                        </ImgWrap>
                                                        <span key={`${p.Player}_${p.Position}`} style={{alignSelf:'center', textAlign:'center'}}>
                                                            <b>{p.Player}</b><br/>
                                                            <b style={{color:'#7048e8'}}>{p[item]}</b>
                                                        </span>
                                                    </StatRankFirst>
                                                );

                                                let backColor = ''
                                                if(i%2 === 0) backColor= 'white';
                                                else         backColor= '#f1f3f5';
                                                return (
                                                    <StatRankOthers key={`${p.Player}_${p.Position}`} style={{backgroundColor: backColor}}>
                                                        <div>{i+1}{'\u00A0'}{'\u00A0'}</div>
                                                        <div>{p.Player}</div>
                                                        <div style={{textAlign:'right', width:'-webkit-fill-available'}}>{p[item]}</div>
                                                    </StatRankOthers>
                                                );
                                            }
                                            else return null;
                                        }) : null}
                                    </StatRankingWrap>
                                );
                            })}
                            </div>
                        </div>
                    </div>

                    <div style={{display:'flex', flexDirection:'column', overflowX:"scroll", marginTop: '50px'}}>
                        <span style={{padding:'0.1rem 2rem'}}><h3><b>Total List</b></h3></span>
                        <small style={{padding:'0.1rem 2rem'}}><Form.Check type='checkbox' label='Only show regular player' onClick={handleToggleShowRegular}></Form.Check></small>
                        <table style={{margin:'0px 1.5rem'}}>
                            <thead>
                            <TableHeaderTr>
                                <th onClick={() => {handleAddSortCondition('Player')}} style={{padding: '0 0.5rem', cursor: 'pointer'}}>
                                    <div style={{display:'flex'}}>
                                        <div><small>Player</small></div>
                                        <div style={{alignSelf:'center'}}>{'\u00A0'}<b>{getSortCondition('Player', sortCondition)}</b></div>
                                    </div>
                                </th>
                                <th onClick={() => {handleAddSortCondition('Position')}} style={{padding: '0 0.5rem', cursor: 'pointer'}}>
                                    <div style={{display:'flex'}}>
                                        <div><small>Position</small></div>
                                        <div style={{alignSelf:'center'}}>{'\u00A0'}<b>{getSortCondition('Position', sortCondition)}</b></div>
                                    </div>
                                </th>
                                {statList.map((stat) => {
                                    return <th key={stat.name} onClick={() => {handleAddSortCondition(stat.name)}} style={{padding: '0 0.5rem', cursor: 'pointer'}}>
                                                <div style={{display:'flex'}}>
                                                    <div><small>{stat.name}</small></div>
                                                    <div style={{alignSelf:'center'}}>{'\u00A0'}<b>{getSortCondition(stat.name, sortCondition)}</b></div>
                                                </div>
                                            </th>;
                                })}
                            </TableHeaderTr>
                            </thead>
                            <tbody>
                                {getSortedPlayerList(null, JSON.parse(JSON.stringify(data)), recordPosition, showRegular, sortCondition).map((p: any, i: number)=> {
                                    return <TableBodyTr key={`${p.Player}_${p.Position}`} idx={i+1}>{Object.entries(p).map( ([key, value]:[string, any]) => {
                                        let sortCond = '';
                                        if(sortCondition.length > 0)    sortCond = sortCondition[sortCondition.length-1].stat;
                                        return <TableBodyTd key={key} stat={key} sortCond={sortCond}><small>{value}</small></TableBodyTd>;
                                    })}</TableBodyTr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </MainWrapper>
            </MainContainer>
            <Footer>
                <p> &copy; 2020. Cheol-Woo Noh Website All Rights Reserved.</p>
            </Footer>
        </>
    )
}

const getNotSelectedStat = (item: string, statList: { name: string; desc: string; }[], recordStat: string[]) => {
    const filterdList = recordStat.filter(stat => stat !== item);
    return statList.filter(stat => !filterdList.includes(stat.name));
}

const getSortedPlayerList = (item: string|null, players: object[], recordPosition: string, filterSmallGame: boolean, sortCondition: {stat: string, asc: boolean}[]|null) => {
    if(filterSmallGame){
        const maxGames = Math.max.apply(Math, players.map((p: any) => {return p.Games}));
        players = players.filter((p: any) => p.Games >= maxGames*0.25);
    }

    if(recordPosition){
        players = players.filter((p: any) => p.Position === recordPosition);
    }
    
    if(item !== null && sortCondition === null){
        return players.sort((p1: any, p2: any) => {
            if(p1[item] === '-') p1[item] = 0;
            if(p2[item] === '-') p2[item] = 0;

            if(typeof(p1[item]) === 'string' ? Number(p1[item].replace(/[^0-9.]/g, '')) > Number(p2[item].replace(/[^0-9.]/g, '')) : p1[item] > p2[item])
                return -1;
            else if(typeof(p1[item]) === 'string' ? Number(p1[item].replace(/[^0-9.]/g, '')) < Number(p2[item].replace(/[^0-9.]/g, '')) : p1[item] < p2[item])    
                return 1;
            else return 0;
        });
    }
    else if(item === null && sortCondition !== null){
        for(let i=0; i<sortCondition.length; i++){
            players.sort((p1: any, p2: any) => {
                let sortArr = [];
                if(sortCondition[i].asc)    sortArr = [1, -1, 0];
                else                        sortArr = [-1, 1, 0];

                if(p1[sortCondition[i].stat] === '-') p1[sortCondition[i].stat] = 0;
                if(p2[sortCondition[i].stat] === '-') p2[sortCondition[i].stat] = 0;

                if(sortCondition[i].stat === 'Player' || sortCondition[i].stat === 'Position'){
                    if(p1[sortCondition[i].stat] > p2[sortCondition[i].stat])   return sortArr[0];
                    else if(p1[sortCondition[i].stat] < p2[sortCondition[i].stat])  return sortArr[1];
                    else    return sortArr[2];
                }
                else if(typeof(p1[sortCondition[i].stat]) === 'string' 
                    ? Number(p1[sortCondition[i].stat].replace(/[^0-9.]/g, '')) > Number(p2[sortCondition[i].stat].replace(/[^0-9.]/g, '')) 
                    : p1[sortCondition[i].stat] > p2[sortCondition[i].stat])
                    return sortArr[0];
                else if(typeof(p1[sortCondition[i].stat]) === 'string' 
                    ? Number(p1[sortCondition[i].stat].replace(/[^0-9.]/g, '')) < Number(p2[sortCondition[i].stat].replace(/[^0-9.]/g, '')) 
                    : p1[sortCondition[i].stat] < p2[sortCondition[i].stat])    
                    return sortArr[1];
                else return sortArr[2];
            });
        }
        return players;
    }
    else return [];
}

const getSortCondition = (stat: string, sortCondition: {stat: string, asc: boolean}[]): string => {
    let sortMark: string = '';
    if(sortCondition.find((o: {stat: string, asc: boolean}) => stat === o.stat && o.asc))  sortMark = '↑';
    else if(sortCondition.find((o: {stat: string, asc: boolean}) => stat === o.stat && !o.asc))    sortMark = '↓';
    return sortMark;
}

const IconWrapper = styled.div`
    width: 60px;
    height: 60px;
    cursor: pointer;
    display: flex;
    justify-content: center;
`;

const StatRankingWrap = styled.section`
    float: left;
    display: inline-block;
    margin: 10px;
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

const StatRankOthers = styled.div`
    border: solid 0.5px;
    border-color: #e0e0e0;
    display: flex;
    padding: 0.25rem 0.65rem;
`;

const TableHeaderTr = styled.tr`
    border-top-style: double;
    border-bottom-style: double;
    background-color: #495057;
    color: white;
`;

const TableBodyTr = styledComponentsTS<any>(styled.tr)`
    border-bottom: ${({idx}) => {
        if(idx%5 === 0) return 'groove 2px';
        else    return 'solid 0.5px';
    }};
    border-color: #e0e0e0;
`;

const TableBodyTd = styledComponentsTS<any>(styled.td)`
    padding: 0 0.5rem;
    background-color: ${({stat, sortCond}) => {
        if(stat === sortCond)   return '#ffc9c9';
        else return '';
    }};
`;

export default Record;