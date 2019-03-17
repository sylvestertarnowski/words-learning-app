import React from "react";

function DisplayWords(props) {
    return (
        <li>{props.data.word} - {props.data.translation}</li>    
    )
}

export default DisplayWords;