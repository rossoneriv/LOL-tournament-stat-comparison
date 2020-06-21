import React from 'react';
import Form from 'react-bootstrap/Form';
import usePlayer from '../hooks/usePlayer';

const TournamentSelect = () => {
    const {handleChange, tournament} = usePlayer();
    const tournamentList = [
        'Mid-Season Cup 2020',
        'LCK Spring 2020',
        'LPL Spring 2020',
        'LEC Spring 2020',
        'LCS Spring 2020',
        'World Championship 2019',
        'LCK Summer 2019',
        'LPL Summer 2019',
        'LEC Summer 2019',
        'LCS Summer 2019',
    ];

    return (
        <>
            <Form.Control as='select' size='sm' placeholder="Select tournament" onChange={handleChange} value={tournament}>
                {tournamentList.map(list => <option key={list}>{list}</option>)}
            </Form.Control>
        </>
    );
}

export default TournamentSelect;