import React, {Component} from "react";
import DisplayWords from "./DisplayWords";

class GuessWords extends Component {
    constructor(props) {
        super(props);
        this.state = {
            randomWord: {},
            tempWord: "",
            list: props.data
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleGuess = this.handleGuess.bind(this);
        this.pickRandomIndex = this.pickRandomIndex.bind(this);
        this.pickWord = this.pickWord.bind(this);
    }

    // Use this.state.list as a table for random words choosing.
    // Generate random number the length of list array
    // use that number to pick a random set of words
    // store the random word in State "randomWord"
    // prepare logic for guessing the "randomWord"
    // when guessed right, remove the word by searching it in array of objects from state
    // re-generate new word

    componentDidMount() {
        console.log(this.pickWord());
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    handleGuess(word) {
    
    }

    pickRandomIndex() {
        const randomNum = Math.floor(Math.random()*this.state.list.length);
        return randomNum;
    }

    pickWord() {
        const r = this.pickRandomIndex();
        console.log(this.state.list[r]);
        this.setState({
            randomWord: this.state.list[r]
        })
    }

    render() {
        let items = this.state.list;
        return (
            <div>
                <ul>
                    {items.map(item => <DisplayWords key={item.word} data={item}/>)}
                </ul>
                <br />
                <h1>Guess this word: {this.state.randomWord.word}</h1>
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