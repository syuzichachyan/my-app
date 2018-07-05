export default {
    root: {
        display: "flex",
        flexDirection: "row",
        border:"0.9px solid grey",


    },

    input: {
        flexGrow: 1,
        borderBottom:"0px"

    },
    IconButton:{
        width:"15px",
        height:"15px",
        backgroundColor : "white",
        '&:hover':{
            cursor: "context-menu",
            backgroundColor : "white"
         },
        '&:active':{
            backgroundColor : "white"
        }
    },
    ArrowDownwardIcon:{
        '&:hover':{
            cursor: "context-menu"
        }

    }

};