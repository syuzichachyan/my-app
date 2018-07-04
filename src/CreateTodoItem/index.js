import React,{Component} from 'react';

class CreateTodoItem extends Component{
    constructor(props){
        super(props);
        this.state={
            value:""
        }

    }

    onChange=e=> {
        debugger;
        console.log(e.target.value);
        this.setState({ value: e.target.value });
    };
    onKeyDown=e=>{
        if(e.keyCode===13)
            this.onClick();
    };

    onClick=()=>{debugger;

        const {value}=this.state;
        const trimmed=value.trim();
        if(trimmed!=="") {
            this.setState({value: ""});
            this.props.onTodoAddItem(trimmed);
        }

    };
    arrowTodosClick=()=>{
        const {makeAllTodoItemsCompleted,todos}=this.props;
        makeAllTodoItemsCompleted(todos);
    };

    render(){
        const {hasTodo}=this.props;
        const {value}=this.state;

        return (
            <div>
                {hasTodo && <button onClick={this.arrowTodosClick}> arrow todos</button>}
                <input value={value} placeholder="What needs to be done?" onChange={this.onChange} onKeyDown={this.onKeyDown}/>
                <button onClick={this.onClick}>Add todo</button>
            </div>
        )
    }
}

export default CreateTodoItem;