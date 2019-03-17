import React, {Component} from "react";
import DisplayWords from "./DisplayWords";
import GuessWords from "./GuessWords";
import populateState from "./populateState";

class AddWords extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: populateState
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
                <GuessWords data={this.state.list}/>
            </div>
        )
    }
}

export default AddWords;