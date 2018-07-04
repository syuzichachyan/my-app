export default {
    root: {
        display: "flex",
        flexDirection: "row",

    },

    input: {
        flexGrow: 1
    },
    IconButton:{
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
        },

    }

};