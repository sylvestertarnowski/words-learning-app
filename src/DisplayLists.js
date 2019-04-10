import React, {Component} from "react";

class DisplayLists extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            language: "",
        }
    }

    static getDerivedStateFromProps() {

    }

    render() {
    return (
        <li>
            List name: {this.props.data.name} - Language: {this.props.data.language}
            <button>Use</button>
            <button>Delete</button>
        </li>
    )
    }
}

export default DisplayLists;