import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import usePlayer from '../hooks/usePlayer';

type props = {
    id: number;
}

const PlayerSelector = ({id}: props) => {
    const {players, data, handleRemoveSelect, handleAddPlayer} = usePlayer();
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const columnDefs: {headerName: string, field: string, sortable: boolean, width: number, filter?: boolean}[] = [
        {headerName: 'Player', field: 'Player', sortable: true, filter: true, width: 150},
        {headerName: 'Position', field: 'Position', sortable: true, width: 150},
        {headerName: 'Games', field: 'Games', sortable: true, width: 130},
    ];

    return(
        <>
            <div style={{borderRadius: '25px', border: '2px solid #007BFF', padding: '10px', width: '190px', height: '50px', cursor: 'pointer'}} onClick={handleShow}>
                {Object.keys(players[id-1]).length === 0 ? 
                    <p>Choose Player</p> : 
                    <p>{players[id-1].Player} / {players[id-1].Position}<img src='clear-player.png' onClick={(e) => {e.stopPropagation(); handleRemoveSelect(id)}}/></p>}
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Players</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="ag-theme-alpine" style={ {height: '700px', width: '450px'} }>
                        <AgGridReact
                            columnDefs={columnDefs}
                            rowData={data}
                            onRowClicked={(e: any) => {handleAddPlayer(e, id); handleClose()}}>
                        </AgGridReact>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    Check All
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default PlayerSelector;