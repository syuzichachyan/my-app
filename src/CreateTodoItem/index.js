import React,{Component} from 'react';
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { withStyles } from '@material-ui/core/styles';
import style from "./style";

class CreateTodoItem extends Component{
    static PropTypes={
        hasTodo:PropTypes.bool,
        makeAllTodoItemsCompleted:PropTypes.func.isRequired,
        onTodoAddItem:PropTypes.func.isRequired,
        todos:PropTypes.array.isRequired
    };
    static defaultProps={
        hasTodo:false
    };
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

    onClick=()=>{

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
        const {hasTodo,classes}=this.props;
        const {value}=this.state;

        return (
            <div className={classes.root}>
                {hasTodo && <IconButton className={classes.IconButton} onClick={this.arrowTodosClick}><ArrowDownwardIcon className={classes.ArrowDownwardIcon}/></IconButton>}
                <input value={value} placeholder="What needs to be done?" onChange={this.onChange} onKeyDown={this.onKeyDown} className={classes.input}/>
            </div>
        )
    }
}

export default withStyles(style)(CreateTodoItem);