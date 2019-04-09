import React from "react";

function DisplayLists(props) {
   return <li>List name: {props.data.name} - Language: {props.data.language}</li>
}

export default DisplayLists;