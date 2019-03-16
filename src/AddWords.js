import React, {Component} from "react";
import DisplayWords from "./DisplayWords";

class AddWords extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    word: "marchewka",
                    translation: "carrot"
                },
            ],
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        const word = event.target.word.value;
        const translation = event.target.translation.value;
        this.setState((prevState) => {
            const newWord = {
                word: word,
                translation: translation
            }
            const newList = prevState.list;
            newList.unshift(newWord);
            return ({
                list: newList,
            })
        });
        event.preventDefault();
    }

    handleWordGuess(event) {
        event.preventDefault();
        const e = event.target;
        console.log(e);
        event.preventDefault();
    }

    render() {
        let items = this.state.list;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="word" placeholder="Word"/>
                    <input type="text" name="translation" placeholder="translation"/>
                    <button>Add</button>
                </form>
                <ul>
                    {items.map(item => <DisplayWords key={item.word} data={item}/>)}
                </ul>
                <form onSubmit={this.handleWordGuess}>
                    <div name="wordToGuess" value={this.state.list[0].translation}>
                        {this.state.list[0].word}
                    </div>
                    <input name="guessedWord" placeholder="guess" value={this.state.list[0].translation} ></input>
                    <button>Guess</button>
                </form>
            </div>
        )
    }
}

export default AddWords;