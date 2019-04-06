import React, {Component} from "react";
import Words from "./Words";
import "./index.css";
import Header from "./Header";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: null
    }
  }

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }

  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };
  
  render() {
    return (
      <div className="main-container">
        <Header />
        <Words />
        {console.log(this.state.data)}
      </div>
    )
  }
}

export default App;