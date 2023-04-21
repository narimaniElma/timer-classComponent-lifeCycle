import { Component } from "react";

/*
 * // NOTE Updating LifeCycle
 * - static getDrivedStateFromProps(props, state);
 * - shouldComponentUpdate(nextProps, nextState);
 * - render();
 * - getSnapshotBeforeUpdate(prevProps, prevState);
 * - componentDidUpdate();
 */

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("Clock.js - constructor()");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Clock.js - getDerivedStateFromProps()");
    return state;
  }

  shouldComponentUpdate(nextProp, nextState) {
    console.log("Clock.js - shouldComponentUpdate()");
    if(this.props.date !== nextProp.date) {
    return true;
    }
    return false;
  }

  render() {
    const { date, color } = this.props;
    console.log("Clock.js - render()");

    const style = {
        color: color ? 'tomato' : ''
    }

    return (
      <>
        <p style={style}>Time is: {date.toLocaleString()}</p>
      </>
    );
  }

  getSnapshotBeforeUpdate(prevProp, prevState) {
    console.log("Clock.js - getSnapshotBeforeUpdate()");
    return {prevProp, prevState};
  }

  componentDidUpdate(prevProp, prevState, snapshot) {
    console.log("Clock.js - componentDidUpdate()");
    console.log(snapshot)
  }

  componentDidMount() {
    console.log("Clock.js - componentDidMount()");
  }

  componentWillUnmount() {
    console.log("Clock.js - componentWillUnmount()");
  }
}

export default Clock;
