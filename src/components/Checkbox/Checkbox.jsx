import React from 'react';

import './Checkbox.css';

import './Checkbox.css';

export default function Checkbox(props) {
    return (
        <input type='checkbox' 
        checked={props.checked}
        onChange={() => props.onChange(props.item)}
        className='checkbox'/>
        
    )
}
