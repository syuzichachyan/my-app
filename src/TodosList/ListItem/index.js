import React, {Component} from 'react';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            isEditing: false
        })

    };

    onChange = (e) => {
        const {todo, onTodoIsCompeteChange} = this.props;
        onTodoIsCompeteChange(e.target.checked, todo);
    };
    onDoubleClick = (e) => {
        this.setState ({
            isEditing: true})
    };
    todoValueChange = (e) => {
        const {onTodoValueChange, todo} = this.props;
        onTodoValueChange(e.target.value, todo);
    };
    onKeyDown = (e) => {
        const {todo} = this.props;
        if (e.keyCode === 13)
            if (e.target.value.trim() === "")
                this.removeItemFromTodo(todo);
            else {
                this.todoValueChange(e);
                this.setState({
                    isEditing: false})
            }
    };
    clearButtonClick = () => {
        const {todo, removeItemFromTodo} = this.props;
        removeItemFromTodo(todo);
    };

    render() {

        const {todo} = this.props;
        const {isEditing} = this.state;
        return (<li>
            <input type="checkbox" checked={todo.isComplete} onChange={this.onChange} />
            {isEditing ?
                <input type="text" value={todo.value} onChange={this.todoValueChange} onKeyDown={this.onKeyDown}/> :
                <span onDoubleClick={this.onDoubleClick}>{todo.value}</span>}
            <button onClick={this.clearButtonClick}>Clear</button>
        </li>)
    }
}

export default ListItem;