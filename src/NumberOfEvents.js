import React, { Component } from 'react';
import { ErrorAlert } from './Alert';


class NumberOfEvents extends Component {
  state = {
    eventCount: 30,
  }

  handleEventCountChange = (event) => {
    const value = event.target.value;
    this.setState({ eventCount: value });

    if (value < 1) {
      this.setState({
        infoText: 'Please show at least one event!',
      });
    } else {
      this.setState({
        infoText: '',
      });
      this.props.updateEvents(null, null, value);
    }
  }

  render() {
    return (
      <div className="NumberOfEvents" >
        <ErrorAlert text={this.state.infoText} />
        <input
          className="event-count-input"
          type="number"
          value={this.state.eventCount}
          onChange={this.handleEventCountChange}
        />
      </div>
    )
  }
}

export default NumberOfEvents;