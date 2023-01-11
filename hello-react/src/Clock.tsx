import { Component } from 'react';

type ClockProps = {
  format?: string
};

type ClockState = {
  now: Date,
};

class Clock extends Component<ClockProps, ClockState> {  
  // constructor(props: ClockProps) {
  //   super(props);
  //   this.state = {
  //     now: new Date(),
  //   };
  // }
  state: Readonly<ClockState> = {
    now: new Date(),
  };

  componentDidMount(): void {
    setInterval(() => {
      this.setState({
        now: new Date(),
      });
    }, 1000);
  }
  render() {
    const { format = 'HH:mm:ss' } = this.props;
    const { now } = this.state;

    return <div className="Clock">{now.toLocaleTimeString()} (au format {format})</div>;
  }
}

export default Clock;
