import React, { Component } from "react";
class App extends Component {
  localColor;
  localText;
  constructor() {
    super();
    this.localColor = "text-primary";
    this.state = {
      sentence: "This sentence will change color",
      textColor: "black",
    };
  }
  changeColor = (color) => {
    this.setState({
      textColor: color,
    });
  };
  render() {
    return (
      <div className="container">
        <h2 style={{ color: this.state.textColor }}>{this.state.sentence}</h2>

        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            class="btn btn-outline-danger"
            onClick={() => this.changeColor("red")}
          >
            Red
          </button>
          <span className={"mx-3 lead "}></span>
          <button
            type="button"
            class="btn btn-outline-success"
            onClick={() => this.changeColor("green")}
          >
            Green
          </button>
          <span className={"mx-3 lead "}></span>
          <button
            type="button"
            class="btn btn-outline-primary"
            onClick={() => this.changeColor("blue")}
          >
            Blue
          </button>
        </div>
      </div>
    );
  }
}
export default App;
