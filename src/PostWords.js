import React, { Component } from "react";

class PostWords extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: props.data
        }
        this.handleSave = this.handleSave.bind(this);
    }

    handleSave() {
        console.log(this.state.list)
    }

    render() { 
        return (
            <button type="submit" onClick={this.handleSave}>Save Words</button>
        )   
    }
}

export default PostWords;