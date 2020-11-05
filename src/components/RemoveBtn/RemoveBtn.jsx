import React from 'react';

import './RemoveBtn.css';

export default function RemoveBtn(props) {
    return (
        <button 
            onClick={() => props.onClick(props.item)}
            className='remove-btn'>
            x
        </button>
    )
}
