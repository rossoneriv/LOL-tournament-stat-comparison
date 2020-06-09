import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import usePlayer from '../hooks/usePlayer';

const StatSelectModal = () => {
    const {statList, selectedStat, handleChangeCheck, handleAllCheck} = usePlayer();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Stat View/Hide
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Stat View/Hide</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {statList.map( stat => {
                        const {name, desc} = stat;
                        const checkFlag = selectedStat.includes(name) ;
                        return <Form.Check 
                                    key={name} 
                                    type='checkbox' 
                                    id={name} 
                                    label={<><b>{name}</b><small>{desc?' - ' + desc:''}</small></>}
                                    onChange={handleChangeCheck} 
                                    checked={checkFlag}
                                />
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

export default StatSelectModal;