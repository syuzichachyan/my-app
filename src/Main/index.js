import React, {Component} from 'react';

import CreateTodoItem from '../CreateTodoItem';

import TodoList from '../TodosList';

class Main extends Component {
    static id=0;
    static FilterActive(todos) {
        return todos.filter(todo => !todo.isComplete);
    }

    static FilterComplete(todos) {
        return todos.filter(todo => todo.isComplete);

    }

    constructor(props) {
        super(props);
        this.state = ({
            todos: [],
            selectedFilter: "all"
        })
    }

    onTodoAddItem = value => {

        const {todos} = this.state;
        const newTodos = [{value, isComplete: false,id:Main.id++}, ...todos];

        this.setState({todos:newTodos});
    };
    removeItemFromTodo = todo => {
        const {todos} = this.state;
        const index = todos.indexOf(todo);
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        this.setState({todos:newTodos});
    };

    onTodoIsCompeteChange = (isComplete, todo) => {
        const {todos} = this.state;
        const index = todos.indexOf(todo);
        const newTodos = [...todos.slice(0, index), {...todo, isComplete}, ...todos.slice(index + 1)];
        this.setState({todos: newTodos});
    };

    onTodoValueChange = (value, todo) => {
        const {todos} = this.state;
        const index = todos.indexOf(todo);
        const newTodos = [...todos.slice(0, index), {...todo, value}, ...todos.slice(index + 1)];
        this.setState( {todos: newTodos});

    };
    getVisibleTodos = (todos, selectedFilter) => {
        if (selectedFilter === "all")
            return todos;
        else if (selectedFilter === "active")
            return Main.FilterActive(todos);
        else if (selectedFilter === "complete")
            return Main.FilterComplete(todos);
    };
    onFilterStateChange = selectedFilter => {
        this.setState({
            selectedFilter
        });
    };

    makeAllTodoItemsCompleted=(todos)=>{
        const newTodos=[...todos];
        todos=newTodos.map(todo=>{return {...todo,isComplete:true}});
        this.setState({todos:todos});
    };

    render() {
        const {todos, selectedFilter} = this.state;
        console.log(todos);
        const getVisibleTodos = this.getVisibleTodos(todos, selectedFilter);
        return (<div>
            <CreateTodoItem hasTodo={getVisibleTodos.length > 0} onTodoAddItem={this.onTodoAddItem} todos={todos} makeAllTodoItemsCompleted={this.makeAllTodoItemsCompleted}/>
            <TodoList onFilterStateChange={this.onFilterStateChange} todos={getVisibleTodos}
                      onTodoIsCompeteChange={this.onTodoIsCompeteChange}
            removeItemFromTodo={this.removeItemFromTodo}
            onTodoValueChange={this.onTodoValueChange}/>
        </div>)
    }


}

export default Main;
