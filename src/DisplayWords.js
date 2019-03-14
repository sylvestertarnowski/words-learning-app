import React from "react";

function DisplayWords(props) {
    let wordPairs = props.data.list;
    let displayWords = () => {
        let listOfWords = [];
        for (let pair of wordPairs) {
            console.log(pair.word)
            listOfWords.push(<li>{pair.word}</li>)
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