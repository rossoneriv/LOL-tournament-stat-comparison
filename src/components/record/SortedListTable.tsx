import React from 'react';
import styled from 'styled-components';
import styledComponentsTS from 'styled-components-ts';

import {getSortedPlayerList, getSortCondition} from '../common';
import useRecord from '../../hooks/useRecord';


type props = {
    statList: {name: string, desc: string}[],
    recordPosition: string,
    showRegular: boolean,
    id?: number,
    handleClose? : () => void,
    handleAddPlayer? : (e: any, id: number) => void
    isPlayerSelector? : boolean
}

const SortedListTable = ({statList, recordPosition, showRegular, id, handleClose, handleAddPlayer, isPlayerSelector}: props) => {
    const {sortCondition, data, handleAddSortCondition} = useRecord();
    console.log(isPlayerSelector);
    return (
        <TableMargin>
            <thead>
                <TableHeaderTr isPlayerSelector={isPlayerSelector}>
                    {statList.map((stat) => {
                        return (
                            <TableHeader key={stat.name} onClick={() => {handleAddSortCondition(stat.name)}}>
                                <DivFlex>
                                    <div><small>{stat.name}</small></div>
                                    <DivAlignCenter>{'\u00A0'}{getSortCondition(stat.name, sortCondition)}</DivAlignCenter>
                                </DivFlex>
                            </TableHeader>
                        );
                    })}
                </TableHeaderTr>
            </thead>
            <tbody>
                {getSortedPlayerList(null, JSON.parse(JSON.stringify(data)), recordPosition, showRegular, sortCondition).map((p: any, i: number)=> {
                    return <TableBodyTr key={`${p.Player}_${p.Position}`} idx={i+1} isPlayerSelector={isPlayerSelector}>
                        {statList.map((stat) => {
                            let sortCond = '';
                            let statName = stat.name;
                            if(sortCondition.length > 0)    sortCond = sortCondition[sortCondition.length - 1].stat;
                            return ( 
                                <TableBodyTd 
                                    key={statName} 
                                    stat={statName} 
                                    sortCond={sortCond} 
                                    onClick={() => {
                                                if(handleAddPlayer && handleClose && typeof(id) === 'number') {
                                                    handleAddPlayer(p, id); 
                                                    handleClose();
                                                }
                                    }}>
                                            <small>{p[statName]}</small>
                                </TableBodyTd>
                            );
                        })}
                    </TableBodyTr>
                })}
            </tbody>
        </TableMargin>
    );
}

const TableHeaderTr = styledComponentsTS<any>(styled.tr)`
    border-top-style: double;
    border-bottom-style: double;
    background-color: #495057;
    color: white;

    ${({isPlayerSelector}) => {
        if(isPlayerSelector)    return 'font-size: 20px';
    }}
`;

const TableBodyTr = styledComponentsTS<any>(styled.tr)`
    border-bottom: ${({idx}) => {
        if(idx%5 === 0) return 'groove 2px';
        else    return 'solid 0.5px';
    }};
    border-color: #e0e0e0;

    ${({isPlayerSelector}) => {
        if(isPlayerSelector)    
            return (
                `font-size: 16px; 
                cursor: pointer;

                &:hover {
                    background-color: #ddd;
                    td {
                        background-color: #ddd;
                    }
                }

                td {
                    padding: 0.25rem 0.5rem;
                }
                `);
    }}
`;

const TableBodyTd = styledComponentsTS<any>(styled.td)`
    padding: 0 0.5rem;
    background-color: ${({stat, sortCond}) => {
        if(stat === sortCond)   return '#ffc9c9';
        else return '';
    }};
`;

const TableMargin = styled.table`
    margin: 0px 1.5rem;
`;

const TableHeader = styledComponentsTS<any>(styled.th)`
    padding: 0 0.5rem;
    cursor: pointer;
`;

const DivFlex = styled.div`
    display: flex;
`;

const DivAlignCenter = styled.div`
    align-self: center;
    font-weight: bold;
`;

export default SortedListTable;