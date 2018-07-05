import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from "@material-ui/core/IconButton";
import Close from "@material-ui/icons/Close";


import style from "./style";

class ListItem extends Component {

    static PropTypes= {
        todo:PropTypes.array.isRequired,
        key:PropTypes.number.isRequired,
        onTodoIsCompeteChange:PropTypes.func.isRequired,
        onTodoValueChange:PropTypes.func.isRequired,
        removeItemFromTodo:PropTypes.func.isRequired
};
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

        const {todo,classes} = this.props;
        const {isEditing} = this.state;
        return (<li className={classes.listItem}>

            <input type="checkbox" checked={todo.isComplete} onChange={this.onChange} className={classes.checkboxCl}/>
            {isEditing ?
                <input type="text" value={todo.value} onChange={this.todoValueChange} onKeyDown={this.onKeyDown}/> :
                <span onDoubleClick={this.onDoubleClick}>{todo.value}</span>}
            <IconButton className={classes.clearButton} onClick={this.clearButtonClick}><Close/></IconButton>
        </li>)
    }
}

export default withStyles(style)(ListItem);