import React from 'react';

import './ToDoList.css';

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listItem: ["1", "3"],
            inputText: '',
        }
    }

    inputChanged = (event) => {
        this.setState({
            inputText: event.target.value
        });
    }

    onButtonClick = () => {
        this.setState({
            listItem: this.state.listItem.concat(this.state.inputText),
            inputText: ''
        })
    }

    render() {
        return (
            <div className='to-do-container'>
                <div>
                    <ul className='to-do-list'>
                    {this.state.listItem.map((li, i) => <li key={i} className='list-item'>{li}</li>)}
                    </ul>
                </div>
                <div className='line-container'>
                    <input
                        onChange={this.inputChanged}
                        value={this.state.inputText}
                        className='list-input'>
                    </input>
                    <button
                        onClick={this.onButtonClick}
                        className='add-item-btn'>
                        +
                    </button>
                </div>
                
            </div>
        )
    }
}

export default ToDoList;