import React, { Component } from "react";

class PostWords extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            language: "",
            list: props.data
        }
        this.handleSave = this.handleSave.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSave(event) {
        event.preventDefault();
        fetch('/words/add' , {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err))
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
                <input 
                    type="text" 
                    value={this.state.name} 
                    name="name" 
                    onChange={this.handleChange}
                    placeholder="Unique List Name" 
                />
                <input
                    type="text"
                    value={this.state.language}
                    name="language"
                    onChange={this.handleChange} 
                    placeholder="Language"
                />
                <button type="submit" onClick={this.handleSave}>Save Words</button>
            </div>
        )   
    }
}

export default PostWords;