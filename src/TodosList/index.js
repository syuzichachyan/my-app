import React, {Component} from "react";
import ListItem from "./ListItem";


class TodoList extends Component {

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
            todos,
            onTodoIsCompeteChange,
            removeItemFromTodo,
            onTodoValueChange,
            clearCompleted

        } = this.props;
        return (

            <div>
                <ul>
                    {todos.map((todo) => <ListItem todo={todo} key={todo.id}
                                                          onTodoIsCompeteChange={onTodoIsCompeteChange}
                                                          onTodoValueChange={onTodoValueChange}
                                                          removeItemFromTodo={removeItemFromTodo}/>)}

                </ul>
                <div>
                    <span>{todos.length} item left</span>
                    <button onClick={this.onAllClick}>All</button>
                    <button onClick={this.onActiveClick}>Active</button>
                    <button onClick={this.onCompleteClick}>Complete</button>
                   <button  onClick={clearCompleted}>Clear completed</button>
                </div>
            </div>
        )
    }

}

export default TodoList;