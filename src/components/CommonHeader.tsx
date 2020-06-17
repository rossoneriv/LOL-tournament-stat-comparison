import React from 'react';
import {Link} from 'react-router-dom';
import TournamentSelect from './TournamentSelect';
import Icon from '@mdi/react';
import { mdiMenu } from '@mdi/js';
import styled from 'styled-components';

const CommonHeader = () => {

    return (
        <Header>
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}><b>LOL Pro Stat Comparison</b></Link>
            <MenuWrap>
                <SelectWrap>
                    <TournamentSelect/>
                </SelectWrap>
                <DropMenuWrap>
                    <div style={{cursor: 'pointer'}}>
                        <Icon path={mdiMenu} title='Select Menu' size={2} horizontal vertical/>
                        <DropdownMenu className="dropMenuWrap"> 
                            <Link className='linkMenu' to='/' style={{ textDecoration: 'none', color: 'black' }}><b><small>Comparison</small></b></Link>
                            <Link className='linkMenu' to='/record' style={{ textDecoration: 'none', color: 'black' }}><b><small>Record</small></b></Link>
                        </DropdownMenu>
                    </div>
                </DropMenuWrap>
            </MenuWrap>
        </Header>
    );
}

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

const DropdownMenu = styled.div`
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 10;
    left: -10px;
    width: auto;
    border-radius: 5px;

    .linkMenu {
        padding: 5px 10px;
        text-decoration: none;
        display: block;
        border-bottom: 0.5px solid #ddd;
        font: initial;
    }
    .linkMenu:hover {
        background-color: #ddd;
        border-radius: 5px;
    }
`;

const DropMenuWrap = styled.div`
    position: relative;
    display: inline-block;

    &:hover .dropMenuWrap {
        display: block;
    }
`;

export default CommonHeader;