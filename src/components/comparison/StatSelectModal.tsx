import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

import usePlayer from '../../hooks/usePlayer';
import StatSelectModalStat from './StatSelectModalStat';

const StatSelectModal = () => {
    const {statList, selectedStat, handleChangeCheck, handleAllCheck} = usePlayer();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <AddStatButton onClick={handleShow}>
                <small><b>Add Stat</b></small>
            </AddStatButton>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Stat View/Hide</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {statList.map( stat => {
                        const {name, desc} = stat;
                        const checkFlag = selectedStat.includes(name) ;
                        return <StatSelectModalStat key={name} name={name} desc={desc} handleChangeCheck={handleChangeCheck} checkFlag={checkFlag}/>
                    })}
                </Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={handleAllCheck}>
                    All Check
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

const AddStatButton = styled.div`
    border-radius: 20px;
    background-color: #495057;
    color: white;
    width: 60px;
    height: 28px;
    text-align: center;
    text-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #C0C0C0, 0 0 30px #C0C0C0, 0 0 40px #C0C0C0, 0 0 55px #C0C0C0, 0 0 75px #C0C0C0;
    cursor: pointer;
    box-shadow: 5px 5px 5px gray;
`;

export default StatSelectModal;