import React, {Component} from "react";
import DisplayWords from "./DisplayWords";

class AddingWords extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        const word = event.target.word.value;
        const translation = event.target.translation.value;
        this.setState({
            [word]: translation
        });
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="word" placeholder="Word" id="word"/>
                    <input type="text" name="translation" placeholder="translation"/>
                    <button>Add</button>
                </form>
                <DisplayWords data={this.state}/>
            </div>
        )
    }
}

export default AddingWords;