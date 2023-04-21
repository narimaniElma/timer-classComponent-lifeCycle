import { Component } from "react";
import "./App.css";
import Clock from "./components/Clock";

/*
 * // NOTE Mounting LifeCycle In Class Components
 * - constructor()
 * - static getDerivedStateFromProps(props, state)
 * - render()
 * - componentDidMount()
 */

class App extends Component {
  constructor() {
    super();
    console.log("App.js - constructor()");
    this.state = { date: new Date(), showClock: true, color: false };

    this.changeClock = this.changeClock.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    console.log("App.js - getDerivedStateFromProps()");
    return state;
  }

  tick() {
    this.setState({ date: new Date() });
  }

  changeClock() {
    this.setState({showClock: !this.state.showClock});
  }

  changeColor() {
    this.setState({color: !this.state.color});
  }

  render() {
    console.log("App.js - render()");
    const {date, showClock, color} = this.state;
    return (
      <div className="App">
      {showClock ? <Clock date={date} color={color}/> : null}
      <hr />
      <button onClick={this.changeClock}>show / hide clock</button>
      <button onClick={this.changeColor}>change color</button>
      </div>
    );
  }

  componentDidMount() {
    console.log("App.js - componentDidMount()");
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    console.log("App.js - componentWillUnmount()");
    clearInterval(this.timer);
  }
}

export default App;
