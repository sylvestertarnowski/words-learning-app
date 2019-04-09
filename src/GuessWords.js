import React, {Component} from "react";
import DisplayWords from "./DisplayWords";

class GuessWords extends Component {
    constructor(props) {
        super(props);
        this.state = {
            correct: null,
            randomWord: {},
            prevWord: {
                word: "",
                translation: ""
            },
            tempWord: "",
            list: props.data
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.pickRandomIndex = this.pickRandomIndex.bind(this);
        this.pickWord = this.pickWord.bind(this);
        this.removeWord = this.removeWord.bind(this);
        this.clearTempWord = this.clearTempWord.bind(this);
    }

    componentDidMount() {
        this.pickWord();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            list: nextProps.data
        })
    }

    handleSubmit(event) {
        let guess = this.state.tempWord;
        let translation = this.state.randomWord.translation;
        if(guess === translation) {
             this.setState({
                correct: true,
            });
            this.removeWord();
            this.clearTempWord();
        } else {
            this.setState({
                correct: false,
                
            })
            this.pickWord();
            this.clearTempWord();
        }
        event.preventDefault();
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    clearTempWord() {
        this.setState({
            tempWord: "",
        })
    }

    pickRandomIndex() {
        let randomNum = Math.floor(Math.random()*this.state.list.length);
        return randomNum;
    }

    pickWord() {
        let r = this.pickRandomIndex();
        this.setState(prevState => {
           return {
               randomWord: this.state.list[r],
               prevWord: prevState.randomWord 
            }
        })
    }

    removeWord() {
        this.setState(prevState => {
            let word = prevState.randomWord;
            let arr = prevState.list;
            return {
                list: arr.filter(item => item.word !== word.word)
            }
        }, () => this.pickWord());
    }

    render() {
        let items = this.state.list;
        return (
            <div className="guess-words-body">
                <ul>
                    {items.map(item => <DisplayWords key={item._id} data={item}/>)}
                </ul>
                <br />
                <div className="guess-words-title">{
                    this.state.randomWord !== undefined ? 
                    <h1>Guess this word: <span style={{textDecoration: "italic"}}>{this.state.randomWord.word}</span></h1> : 
                    <h1>Play again?</h1>
                }
                </div>
                    <h1 className="answer-feedback">
                        {/* conditional rendering for answer feedback */}
                        {
                            this.state.correct ? 
                            <span style={{color: "green"}}>Correct!</span> : 
                            <span style={{color: "red"}}>Wrong! {this.state.prevWord.word} - {this.state.prevWord.translation}</span>
                        }
                    </h1>
                <div className="guess-words">
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
                </div>
            </div>
        );
    }
}

export default GuessWords;