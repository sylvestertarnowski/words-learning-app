import React from "react";

function DisplayLists(props) {
   return <span>List name: {props.data.name} - Language: {props.data.language}</span>
}

export default DisplayLists;