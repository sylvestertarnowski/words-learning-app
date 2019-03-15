import React, {Component} from "react";
import AddWords from "./AddWords";
import GuessWords from "./GuessWords"
// Create Header and Footer later on


class App extends Component {
  render() {
    return (
      <div>
        {/* <Header /> */}
        <AddWords />
        <GuessWords />
        {/* {<Footer />} */}
      </div>
    )
  }
}

export default App;