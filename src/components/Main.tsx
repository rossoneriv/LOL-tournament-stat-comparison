import React from 'react';
import StatSelectModal from './StatSelectModal';
import styled from 'styled-components';
import { MainContainer, MainWrapper, Footer} from './common';
import Spinner from 'react-bootstrap/Spinner';

import PlayerSelector from './PlayerSelector';
import PlayerBox from './PlayerBox';
import useTournament from '../hooks/useTournament';
import usePlayer from '../hooks/usePlayer';
// import Comparison from './Comparison';
import CommonHeader from './CommonHeader';

const Main = () => {
    const {pending, error} = useTournament();
    const {players} = usePlayer();

    return (
        <>  
            <CommonHeader/>
            <MainContainer>
                <StatSelectButton>
                {/* <div style={{position: 'fixed', top: '150px', left: '50px', zIndex: 10}}> */}
                    <StatSelectModal/>
                {/* </div> */}
                </StatSelectButton>
                <MainWrapper>
                    { pending && 
                        <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    }
                    { error ? <h1>Sorry. Data could not be loaded.</h1> : 
                        <>
                            <PlayerBoxSection id={Object.keys(players[0]).length > 0 ? '1' : '0'}>
                                <PlayerSelector id={1}/>
                                <PlayerBox id={1}></PlayerBox>
                            </PlayerBoxSection>

                            <PlayerBoxSection id={Object.keys(players[1]).length > 0 ? '2' : '0'}>
                                <PlayerSelector id={2}/>
                                <PlayerBox id={2}></PlayerBox>
                                </PlayerBoxSection>

                            {Object.keys(players[0]).length>0 && Object.keys(players[1]).length>0 ?
                            <PlayerBoxSection id={Object.keys(players[2]).length > 0 ? '3' : '0'}>
                                <PlayerSelector id={3}/>
                                <PlayerBox id={3}></PlayerBox>
                            </PlayerBoxSection>
                            : <></>}

                            {Object.keys(players[2]).length>0 ?
                            <PlayerBoxSection id={Object.keys(players[3]).length > 0 ? '4' : '0'}>
                                <PlayerSelector id={4}/>
                                <PlayerBox id={4}></PlayerBox>
                            </PlayerBoxSection>
                            : <></>}

                            {Object.keys(players[3]).length>0 ?
                            <PlayerBoxSection id={Object.keys(players[4]).length > 0 ? '5' : '0'}>
                                <PlayerSelector id={5}/>
                                <PlayerBox id={5}></PlayerBox>
                            </PlayerBoxSection>
                            : <></>}
                        </>
                    }
                </MainWrapper>
            </MainContainer>
            <Footer>
                <p> &copy; 2020. Cheol-Woo Noh Website All Rights Reserved.</p>
            </Footer>
        </>
    );
}

const StatSelectButton = styled.div`
    position: fixed;
    top: 100px;
    left: 180px;
    zIndex: 100;

    @media screen and (max-width: 1150px) {
        left: 25px;
    }

    @media screen and (max-width: 321px) {
        top: 130px;
        left: 5px;
    }
`;

const PlayerBoxSection = styled.section`
    float: left;
    display: inline-block;
    margin: 10px;
    width: 25%;
    max-width: 230px;
    min-width: 130px;

    ${({id}: {[k: string]: any}) => {
        if(Number(id) > 0) {
            let color = '';
            switch(Number(id)) {
                case 1 : color= '#ffa8a8'; break;
                case 2 : color= '#ffc078'; break;
                case 3 : color= '#63e6be'; break;
                case 4 : color= '#91a7ff'; break;
                case 5 : color= '#b197fc'; break;
                default : color= '#ccc';
            }
            return `border: solid ${color};
                    border-radius: 10px;`;
        } else
            return `border: solid #ccc;
                    border-style: dashed;
                    border-radius: 10px; `;
    }}

    @media screen and (max-width: 865px) {
        margin: 5px;
    }
`;

export default Main;