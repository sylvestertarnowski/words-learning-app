import React from "react";

function DisplayWords(props) {
    let words = Object.keys(props.data);
    let displayWords = () => {
        let listOfWords = [];
        for (let word of words) {
            console.log(word)
            listOfWords.push(<li>{word}</li>)
        }
        return listOfWords;
    }
    return (
        <div>
            <ul>
                {displayWords()}
            </ul>
        </div>
    )
}

export default DisplayWords;