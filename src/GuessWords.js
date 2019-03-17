import React, {Component} from "react";

class GuessWords extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempWord: "",
            list: props.data
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // Use this.state.list as a table for random words choosing.
    // Generate random number the length of list array
    // use that number to pick a random set of words
    // store the random word in State "randomWord"
    // prepare logic for guessing the "randomWord"
    // when guessed right, remove the word by searching it in array of objects from state
    // re-generate new word

    handleSubmit(event) {
        console.log(this.state.list[0].word);
        event.preventDefault();
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        console.log(this.state.list)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        name="tempWord"
                        placeholder="guess"
                        value={this.state.tempWord}
                        onChange={this.handleChange}
                    />
                    <button>Guess</button>
                </form>
                <h1>Hello World</h1>
            </div>
        );
    }
}

export default GuessWords;