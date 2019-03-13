import React from "react";

function DisplayWords(props) {
    return (
        <div>
            {Object.keys(props.data)[0] && Object.keys(props.data)[0]}
        </div>
    )
}

export default DisplayWords;