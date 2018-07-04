import React, {Component} from "react";
import ListItem from "./ListItem";
import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import style from "./style";

class TodoList extends Component {
    static PropTypes={
        todos:PropTypes.array.isRequired,
        onTodoIsCompeteChange:PropTypes.func.isRequired,
        removeItemFromTodo:PropTypes.func.isRequired,
        onTodoValueChange:PropTypes.func.isRequired,
        clearCompleted:PropTypes.func.isRequired,
        onFilterStateChange:PropTypes.func.isRequired
    };

    onAllClick = () => {
        this.props.onFilterStateChange("all")
    };
    onActiveClick = () => {
        this.props.onFilterStateChange("active");
    };
    onCompleteClick = () => {
        this.props.onFilterStateChange("complete");
    };


    render() {
        const {
            classes,
            todos,
            onTodoIsCompeteChange,
            removeItemFromTodo,
            onTodoValueChange,
            clearCompleted

        } = this.props;
        return (

            <Card>
                <ul className={classes.ul}>
                    {todos.map((todo) => <ListItem todo={todo} key={todo.id}
                                                          onTodoIsCompeteChange={onTodoIsCompeteChange}
                                                          onTodoValueChange={onTodoValueChange}
                                                          removeItemFromTodo={removeItemFromTodo}/>)}

                </ul>
                <div>
                    <span>{todos.length} item left</span>
                    <Button className={classes.all} onClick={this.onAllClick}>All</Button>
                    <Button className={classes.all} onClick={this.onActiveClick}>Active</Button>
                    <Button className={classes.all} onClick={this.onCompleteClick}>Complete</Button>
                   <Button className={classes.all} onClick={clearCompleted}>Clear completed</Button>
                </div>
            </Card>
        )
    }

}

export default withStyles(style)(TodoList);