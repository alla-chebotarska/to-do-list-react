import React from 'react';
import AddBtn from '../AddBtn/AddBtn';
import RemoveBtn from '../RemoveBtn/RemoveBtn';

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

    onAddButtonClick = () => {
        this.setState({
            listItem: this.state.listItem.concat(this.state.inputText),
            inputText: ''
        })
    }

    onRemoveBtnClick = (item) => {
        let modifiedlistItem = this.state.listItem;
        let indexOfRemovedItem = modifiedlistItem.indexOf(item)
        modifiedlistItem.splice(indexOfRemovedItem, 1);
        this.setState({
            listItem: modifiedlistItem
        })
    }

    render() {
        return (
            <div className='to-do-container'>
                <div>
                    <ul className='to-do-list'>
                        {this.state.listItem.map((item) =>
                            <li key={item} className='list-item'>
                                {item}
                                <span className='remove'>
                                    <RemoveBtn
                                        item={item}
                                        onClick={this.onRemoveBtnClick}
                                    >
                                    </RemoveBtn>
                                </span>
                            </li>
                        )}
                    </ul>
                </div>
                <div className='line-container'>
                    <input
                        onChange={this.inputChanged}
                        value={this.state.inputText}
                        className='list-input'>
                    </input>
                    <AddBtn
                        onClick={this.onAddButtonClick}>
                    </AddBtn>
                </div>
            </div>
        )
    }
}

export default ToDoList;