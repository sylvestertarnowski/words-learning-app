import React, {Component} from "react";

class GuessWords extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: props.data
        }
    }

    render() {
        console.log(this.state.list)
        return (
            <h1>Hello World</h1>
        );
    }
}

export default GuessWords;