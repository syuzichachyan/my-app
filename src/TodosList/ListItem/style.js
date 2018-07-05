export default {
    listItem:{

        height:"35px",
        margin: "auto",
        border:"1px solid grey",
        '&:hover > button':{
            display:"inline"
        }
    },
    clearButton:{
        height:"80%",
        float:"right",
        color:"red",
        '&:hover':{
            backgroundColor:"white"
        },
        display:'none'

    },
    checkboxCl:{
        '&:checked + span': {
            textDecoration: 'line-through',
            color: '#ccc'
        }
    }
}