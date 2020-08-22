import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    events: 30,
  }

  handleEventCountChange = (event) => {
    const value = event.target.value;
    this.setState({ events: value });
  }

  render() {
    return (
      <div>
        <input
          className="event-count-input"
          type="number"
          value={this.state.events}
          onChange={this.handleEventCountChange}
        />
      </div>
    )
  }

}

export default NumberOfEvents;