import { Component } from "react";

type CounterProps = {

};

type CounterState = {
  count: number;
};

class Counter extends Component<CounterProps, CounterState> {
  state: Readonly<CounterState> = {
    count: 0,
  };

  // constructor(props: CounterProps) {
  //   super(props);
  //   this.handleClick = this.handleClick.bind(this);
  // }

  handleClick = () => {
    const { count } = this.state;
    this.setState({
      count: count + 1,
    });
  };

  render() {
    const { count } = this.state;
    return <button className="Counter" onClick={this.handleClick}>{count}</button>;
  }
}

export default Counter;
