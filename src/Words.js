import React, {Component} from "react";
import GuessWords from "./GuessWords";
import populateState from "./populateState";
import PostWords from "./PostWords";

class Words extends Component {
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

    updateStateWithData = () => {
        this.callWordsDownload()
            .then(res => this.setState(prevState => {
                let newList = res.list.concat(prevState.list);
                return { 
                    word: "",
                    translation: "",
                    list: newList 
                }
            }, () => console.log(this.state.list)))

            .catch(err => console.log(err));
    }

    callWordsDownload = async () => {
        const response = await fetch('/words/find', {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        });
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message)
        }
        return body;
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
        console.log(this.state.list)
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
            <div className="words-item">
                <div className="add-words-form">
                    <div className="add-words-form-title">
                        <h2>Add word to list</h2>
                    </div>
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
                    <button onClick={this.updateStateWithData}>Download List from Server</button>
                </div> 
                <PostWords data={this.state.list} />
                <GuessWords data={this.state.list} />
            </div>
        )
    }
}

export default Words;