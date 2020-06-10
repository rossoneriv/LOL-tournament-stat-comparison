import React from 'react';
import useTournament from '../hooks/useTournament';
import usePlayer from '../hooks/usePlayer';
import StatSelectModal from './StatSelectModal';
import TournamentSelect from './TournamentSelect';
import PlayerSelector from './PlayerSelector';
import PlayerBox from './PlayerBox';
import Spinner from 'react-bootstrap/Spinner';
import styled from 'styled-components';

const Main = () => {
    const {pending, error} = useTournament();
    const {players} = usePlayer();

    return (
        <>  
            <Header>
                <b>LOL Pro Stat Comparison</b>
                <MenuWrap>
                    <SelectWrap>
                        <TournamentSelect/>
                    </SelectWrap>
                    <StatSelectModal/>
                </MenuWrap>
            </Header>
            
            <MainContainer>
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

            </Footer>
        </>
    );
}

// styled-components
const Header = styled.nav`
	background: #343a40;
	position: fixed;
	width: 100%;
	top: 0;
	left: 0;
    padding: .5rem 10rem;
    display: flex;
    flex-flow: row nowrap;
    color: white;
    font-size: 1.5em;
    justify-content: center;
    align-items: center;
    z-index: 100;
    opacity: 0.9;

    @media screen and (max-width: 986px) {
        padding-right: 5rem;
        padding-left: 5rem;
    }

    @media screen and (max-width: 640px) {
        padding-right: 1rem;
        padding-left: 0;
    }
`;

const MenuWrap = styled.div`
    display: flex;
    flex-basis: auto;
    flex-grow: 1;
    justify-content: flex-end;
    padding: .5rem 1rem;
    align-items: center;
`;

const SelectWrap = styled.div`
    max-width: 250px;
    padding: 0 .5rem 0 .5rem;
`;

const MainContainer = styled.div`
    background-image: url('background.jpg');
    min-height: 85vh;
    background-color: #eae8e3;
    padding: 70px 10rem 1rem 10rem;
    overflow-y: auto;

    @media screen and (max-width: 1150px) {
        padding-left: 2rem;
        padding-right: 2rem;
    }

    @media screen and (max-width: 842px) {
        padding-top: 94px;
        padding-left: 1rem;
        padding-right: 1rem;
    }

    @media screen and (max-width: 500px) {
        padding-top: 124px;
        padding: 124px 0rem 1rem 0rem;
        flex-direction: column;
    }
`;

const MainWrapper = styled.main`
    overflow-y: auto;
    padding: 1rem 1rem;
    background: white;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    margin: 0 auto;
    min-height: 500px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    @media screen and (max-width: 825px) {
        padding: .15rem .15rem;
    }

    @media screen and (max-width: 500px) {
        padding: 0;
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

const Footer = styled.div`
    min-height: 15vh;
    background: #343a40;
`;

export default Main;