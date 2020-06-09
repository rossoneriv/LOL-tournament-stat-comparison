import React from 'react';
import useTournament from '../hooks/useTournament';
import usePlayer from '../hooks/usePlayer';
import StatSelectModal from './StatSelectModal';
import TournamentSelect from './TournamentSelect';
import PlayerSelector from './PlayerSelector';
import PlayerBox from './PlayerBox';

const Main = () => {
    const {pending, error} = useTournament();
    const {players} = usePlayer();

    return (
        <>
            { pending && <h2>Now Loading...</h2>}
            { error ? <h1>Error</h1> : 
                <>  
                    <div><TournamentSelect/></div>
                    <div><StatSelectModal/></div>

                    <section className="row" style={{float:'left', display:'inline-block', margin: '10px'}}>
                        <PlayerSelector id={1}/>
                        <PlayerBox id={1}></PlayerBox>
                    </section>

                    <section className="row" style={{float:'left', display:'inline-block', margin: '10px'}}>
                        <PlayerSelector id={2}/>
                        <PlayerBox id={2}></PlayerBox>
                    </section>

                    {Object.keys(players[0]).length>0 && Object.keys(players[1]).length>0 ?
                    <section className="row" style={{float:'left', display:'inline-block', margin: '10px'}}>
                        <PlayerSelector id={3}/>
                        <PlayerBox id={3}></PlayerBox>
                    </section> 
                    : <></>}

                    {Object.keys(players[2]).length>0 ?
                    <section className="row" style={{float:'left', display:'inline-block', margin: '10px'}}>
                        <PlayerSelector id={4}/>
                        <PlayerBox id={4}></PlayerBox>
                    </section>
                    : <></>}

                    {Object.keys(players[3]).length>0 ?
                    <section className="row" style={{float:'left', display:'inline-block', margin: '10px'}}>
                        <PlayerSelector id={5}/>
                        <PlayerBox id={5}></PlayerBox>
                    </section>
                    : <></>}
                </>
            }
        </>
    );
}

export default Main;