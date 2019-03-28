import React, {Component} from "react";
import GuessWords from "./GuessWords";
// import populateState from "./populateState";
import PostWords from "./PostWords";

class AddWords extends Component {
    constructor(props) {
        super(props);
        this.state = {
            word: "",
            translation: "",
            list: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        fetch('/words/default', {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => this.setState({
            list: data.list
        }))
        .then(() => console.log(this.state.list))
        .catch(err => console.log(err));
    }

    handleSubmit(event) {
        this.setState((prevState) => {
            const newWord = {
                word: prevState.word,
                translation: prevState.translation
            }
            const newList = prevState.list;
            newList.unshift(newWord);
            return ({
                word: "",
                translation: "",
                list: newList,
            })
        });
        event.preventDefault();
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        autoFocus
                        type="text" 
                        name="word"
                        value={this.state.word} 
                        placeholder="Word"
                        onChange={this.handleChange}
                    />
                    <input 
                        type="text"
                        name="translation" 
                        value={this.state.translation}
                        placeholder="translation"
                        onChange={this.handleChange}
                    />
                    <button>Add</button>
                </form>
                <PostWords data={this.state.list} />
                <GuessWords data={this.state.list} />
            </div>
        )
    }
}

export default AddWords;