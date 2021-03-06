import React, {Component} from 'react';
import CreateTodoItem from '../CreateTodoItem';
import TodoList from '../TodosList';
import {withStyles} from '@material-ui/core/styles';
import style from "./style";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";


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
    clearCompleted=()=>{
        const {todos}=this.state;
        const activeTodos=Main.FilterActive(todos);
        this.setState({todos: activeTodos});
    };

    makeAllTodoItemsCompleted=(todos)=>{
        const newTodos=[...todos];
        console.log(Main.FilterActive(todos).length);
        let isComplete=Main.FilterActive(todos).length>0;
        todos=newTodos.map(todo=>{return {...todo,isComplete}});
        this.setState({todos:todos});
    };

    render() {
        const {todos, selectedFilter} = this.state;
        const {classes} = this.props;
        const getVisibleTodos = this.getVisibleTodos(todos, selectedFilter);
        return (<Card className={classes.root}>
            <CardContent>
                <h1 className={classes.title}>todos</h1>
                <CreateTodoItem hasTodo={getVisibleTodos.length > 0} onTodoAddItem={this.onTodoAddItem} todos={todos}
                                makeAllTodoItemsCompleted={this.makeAllTodoItemsCompleted}/>
                <TodoList onFilterStateChange={this.onFilterStateChange} todos={getVisibleTodos}
                          onTodoIsCompeteChange={this.onTodoIsCompeteChange}
                          removeItemFromTodo={this.removeItemFromTodo}
                          onTodoValueChange={this.onTodoValueChange} clearCompleted={this.clearCompleted}/>
            </CardContent>
        </Card>)
    }


}

export default withStyles(style)(Main);
