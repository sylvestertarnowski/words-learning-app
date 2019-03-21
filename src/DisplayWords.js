import React from "react";

function DisplayWords(props) {
    return (
        <li>{props.data.word}</li>    
    )
}

export default DisplayWords;