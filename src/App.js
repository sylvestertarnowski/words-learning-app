import React, {Component} from "react";
import Words from "./Words";
import "./index.css";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <Header />
        <Words />
      </div>
    )
  }
}

export default App;