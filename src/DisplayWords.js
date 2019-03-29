import React, { Component } from "react";

class DisplayWords extends Component {
    constructor(props) {
        super(props);
        this.state = {
            word: props.data.word
        }
    }
    
    render() {
        return (
            <li>{this.state.word}</li>
        )
    }
}

export default DisplayWords;