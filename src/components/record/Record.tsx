import React from 'react';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import styledComponentsTS from 'styled-components-ts';

import {MainContainer, MainWrapper, Footer} from '../common';
import usePlayer from '../../hooks/usePlayer';
import useRecord from '../../hooks/useRecord';
import CommonHeader from '../CommonHeader';
import StatRanking from './StatRanking';
import SortedListTable from './SortedListTable';

const Record = () => {
    const {statList} = usePlayer();
    const {recordPosition, showRegular, handleSelectPosition, handleToggleShowRegular} = useRecord();

    return(
        <>
            <CommonHeader/>
            
            <MainContainer>
                <MainWrapper>
                    <RecordDiv className='first'>
                        <RecordDiv className='second'>
                            <IconWrapper>
                                <PositionImg src={`position/ALL.png`} alt={'ALL'} onClick={() => {handleSelectPosition('')}}></PositionImg>
                            </IconWrapper>
                            <IconWrapper>
                                <PositionImg src={`position/TOP.png`} alt={'TOP'} onClick={() => {handleSelectPosition('TOP')}}></PositionImg>
                            </IconWrapper>
                            <IconWrapper>
                                <PositionImg src={`position/JUNGLE.png`} alt={'JUNGLE'} onClick={() => {handleSelectPosition('JUNGLE')}}></PositionImg>
                            </IconWrapper>
                            <IconWrapper>
                                <PositionImg src={`position/MID.png`} alt={'MID'} onClick={() => {handleSelectPosition('MID')}}></PositionImg>
                            </IconWrapper>
                            <IconWrapper>
                                <PositionImg src={`position/ADC.png`} alt={'ADC'} onClick={() => {handleSelectPosition('ADC')}}></PositionImg>
                            </IconWrapper>
                            <IconWrapper>
                                <PositionImg src={`position/SUPPORT.png`} alt={'SUPPORT'} onClick={() => {handleSelectPosition('SUPPORT')}}></PositionImg>
                            </IconWrapper>
                        </RecordDiv>
                        <StatRanking/>
                    </RecordDiv>

                    <RecordDiv className='tableWrap'>
                        <h3><TotalTableTitle>Total List</TotalTableTitle></h3>
                        <RegularCheckWrap>
                            <Form.Check type='checkbox' label='Only show regular player' onClick={handleToggleShowRegular}></Form.Check>
                        </RegularCheckWrap>
                        <SortedListTable 
                            statList={[{name: 'Player', desc: ''}, {name: 'Position', desc: ''}, ...statList]}
                            recordPosition={recordPosition}
                            showRegular={showRegular}
                        />
                    </RecordDiv>
                </MainWrapper>
            </MainContainer>
            <Footer>
                <p> &copy; 2020. Cheol-Woo Noh Website All Rights Reserved.</p>
            </Footer>
        </>
    )
}

const IconWrapper = styled.div`
    width: 60px;
    height: 60px;
    cursor: pointer;
    display: flex;
    justify-content: center;
`;

const RecordDiv = styled.div`
    display: flex;

    &.first {
        flex-direction: column;
    }

    &.second {
        align-self: center;
    }

    &.tableWrap {
        overflow-x: scroll;
        margin-top: 50px;
        flex-direction: column;
    }
`;

const TotalTableTitle = styled.span`
    padding: 0.1rem 2rem;
    font-weight: bold;
`;

const RegularCheckWrap = styled.small`
    padding: 0.1rem 2rem;
`;

const PositionImg = styledComponentsTS<any>(styled.img)`
    align-self: center;
`;
export default Record;