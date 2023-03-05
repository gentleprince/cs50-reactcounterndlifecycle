import { Component } from "react";
import "./styles.css";

class App extends Component {
  state = {
    count: 0
  };
  componentDidMount() {
    let counting = localStorage.getItem("count");
    const count = parseFloat(counting);
    if (count !== null) this.setState({ count });

    window.addEventListener("beforeunload", () => {
      localStorage.setItem("count", this.state.count);
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Counter</h1>
        <h2>{this.state.count}</h2>
        <button
          onClick={() =>
            this.state.count !== 0
              ? this.setState((state) => ({ count: state.count - 1 }))
              : ""
          }
        >
          -
        </button>
        <button
          onClick={() => this.setState((state) => ({ count: state.count + 1 }))}
        >
          +
        </button>
      </div>
    );
  }
}

export default App;
