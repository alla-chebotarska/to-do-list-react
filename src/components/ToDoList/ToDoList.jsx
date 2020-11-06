import React from 'react';
import AddBtn from '../AddBtn/AddBtn';
import Button from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';
import RemoveBtn from '../RemoveBtn/RemoveBtn';

import './ToDoList.css';

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listItem: [{ key: Date.now(), checked: true, value: "test" }],
            inputText: '',
            showAll: true
        }
    }

    inputChanged = (event) => {
        this.setState({
            inputText: event.target.value
        });
    }

    onAddButtonClick = () => {
        let newItem = { key: Date.now(), checked: false, value: this.state.inputText };
        this.setState({
            listItem: this.state.listItem.concat(newItem),
            inputText: ''
        })
    }

    onRemoveBtnClick = (item) => {
        let listToModify = this.state.listItem;
        let indexOfRemovedItem = listToModify.indexOf(item);
        listToModify.splice(indexOfRemovedItem, 1);
        this.setState({
            listItem: listToModify
        })
    }

    onCheckboxClick = (item) => {
        let listToModify = this.state.listItem;
        let indexOfModifiedItem = listToModify.indexOf(item);
        listToModify[indexOfModifiedItem].checked = !listToModify[indexOfModifiedItem].checked;
        this.setState({
            listItem: listToModify
        })
    }

    showActiveTask = (event) => {
        let currentState = this.state.showAll;
        this.setState({
            showAll: !currentState
        })
    }

    render() {
        return (
            <div className='to-do-container'>
                <div>
                    <ul className='to-do-list'>
                        {this.state.listItem
                            .filter((item) => this.state.showAll || !item.checked)
                            .map((item) =>
                                <li key={item.key} className={`list-item ${item.checked ? 'checked-item' : ''}`}>
                                    <Checkbox
                                        item={item}
                                        onChange={this.onCheckboxClick}
                                        checked={item.checked} />
                                    {item.value}
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
                <Button
                    onClick={this.showActiveTask}>
                   { this.state.showAll ? 'Show active task' : "Show all task"}
                </Button>
            </div>
        )
    }
}

export default ToDoList;