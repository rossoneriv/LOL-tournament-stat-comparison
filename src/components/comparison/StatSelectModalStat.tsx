import React from 'react';
import Form from 'react-bootstrap/Form';

type props = {
    name: string,
    desc: string,
    handleChangeCheck: (e: React.ChangeEvent<HTMLInputElement>) => void,
    checkFlag: boolean,
}

const StatSelectModalStat = ({name, desc, handleChangeCheck, checkFlag}: props) => {

    return (
        <Form.Check 
            key={name} 
            type='checkbox' 
            id={name} 
            label={<><b>{name}</b><small>{desc?' - ' + desc:''}</small></>}
            onChange={handleChangeCheck} 
            checked={checkFlag}
        />
    )
}

export default React.memo(StatSelectModalStat, (prev, next) => {
    if(prev.checkFlag === next.checkFlag)   return true;
    else    return false;
});