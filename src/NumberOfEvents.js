import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    eventCount: 30,
  }

  handleEventCountChange = (event) => {
    const value = event.target.value;
    this.setState({ eventCount: value });
    this.props.updateCount(this.state.eventCount);
  }

  render() {
    return (
      <div>
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