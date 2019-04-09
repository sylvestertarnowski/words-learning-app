import React, {Component} from "react";
import GuessWords from "./GuessWords";
// import populateState from "./populateState";
import PostWords from "./PostWords";
import DisplayLists from "./DisplayLists";

class Words extends Component {
    constructor(props) {
        super(props);
        this.state = {
            word: "",
            translation: "",
            wordsList: [],
            list: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.downloadAllLists = this.downloadAllLists.bind(this);
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

    downloadAllLists() {
        fetch('/words/all', {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => this.setState({ wordsList: data }))
        .catch(err => console.error(err));
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
        let items = this.state.wordsList;
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
                    <button onClick={this.downloadAllLists}>Display all saved lists</button>
                    <ul>
                        {items.map(item => <DisplayLists key={item.name} data={item} />)}
                    </ul>
                </div> 
                <PostWords data={this.state.list} />
                <GuessWords data={this.state.list} />
            </div>
        )
    }
}

export default Words;