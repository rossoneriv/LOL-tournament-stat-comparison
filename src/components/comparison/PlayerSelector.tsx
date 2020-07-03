import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import styledComponentsTS from 'styled-components-ts';

import usePlayer from '../../hooks/usePlayer';
import SortedListTable from '../record/SortedListTable';

type props = {
    id: number;
}

const PlayerSelector = ({id}: props) => {
    const {players, handleRemoveSelect, handleAddPlayer} = usePlayer();
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
            {Object.keys(players[id-1]).length === 0 ? 
                <ChoosePlayer onClick={handleShow}>
                    <p><b>Choose<br/> Player</b></p>
                </ChoosePlayer> : 
                <PlayerInfo>
                    <RemovePlayer onClick={(e) => handleRemoveSelect(id)}>&times;</RemovePlayer>
                    <ImgWrap>
                        <img src={`player/${players[id-1].Player}.png`} onError={(e)=>{e.currentTarget.onerror = null; e.currentTarget.src='player/noplayer.png'}} 
                             alt={players[id-1].Player}></img>
                    </ImgWrap>
                    <InfoWrap>
                        <img src={`position/${players[id-1].Position}.png`} alt={players[id-1].Position}></img>
                        <PlayerName>{players[id-1].Player}</PlayerName>
                    </InfoWrap>
                </PlayerInfo>
            }

            <ModalStyled show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Players</Modal.Title>
                </Modal.Header>
                <ModalBody>
                    <SortedListTable
                        statList={[{name: 'Player', desc: ''}, {name: 'Position', desc: ''}, {name: 'Games', desc: ''}]}
                        recordPosition={''}
                        showRegular={false}
                        id={id}
                        handleClose={handleClose}
                        handleAddPlayer={handleAddPlayer}
                        isPlayerSelector={true}
                    />
                </ModalBody>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </ModalStyled>
        </>
    );
}


// styled-components
const ChoosePlayer = styled.div`
    // border: solid #ccc;
    // border-style: dashed;
    // border-radius: 25px; 
    display: flex;
    align-items: center;
    cursor: pointer;
    text-shadow: 5px 5px 0 #e2e2e2;
    font-size: 1.5rem;
    color: #909090;
    height: -webkit-fill-available;
    justify-content: center;
    text-align: center;
    background-image: linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url('choose-player.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    min-height: 500px;
`;

const PlayerInfo = styled.div`
    display: flex;
    align-items: center;
    flex-flow: column;
    position: relative;
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

const InfoWrap = styled.div`
    display: flex;

    @media screen and (max-width: 1420px) {
        flex-flow: column;
        align-items: center;
    }
`;

const RemovePlayer = styled.div`
    position: absolute;
    top: 3px;
    right: 3px;
    cursor: pointer;
    font-weight: bold;
    font-size: larger;
    padding: 3px 10px;
`;

const PlayerName = styled.h4`
    align-self: center;
    font-weight: bold;
`;

const ModalBody = styled(Modal.Body)`
    height: 750px;
    overflow-y: scroll;

    @media screen and (max-width: 1025px) {
        height: 600px;
    }

    @media screen and (max-width: 480px) {
        height: 500px;
    }
`;

const ModalStyled = styledComponentsTS<any>(styled(Modal))`
    .modal-dialog {
        width: fit-content;
    }
`;

export default React.memo(PlayerSelector);