import React from 'react';

import './AddBtn.css'

export default function AddBtn(props) {
    return (
        <button 
            className='add-item-btn' 
            onClick={props.onClick}>
            +
        </button>
    )
}
