import React, { Component } from 'react';
import { DateTime, Settings } from 'luxon';

class LuxonUsage extends Component {
  luxonString = null;
  tzAware = false;

  applyDefaultTimezone = () => {
    Settings.defaultZoneName = 'America/New_York';
    this.luxonString = DateTime.local().toString();
    if (this.luxonString.includes('04:00')) {
      this.tzAware = 'timezone aware';
    }
  };

  render() {
    this.applyDefaultTimezone();
    return (
      <span>
        Hello from LuxonUsage {this.luxonString} {this.tzAware}
      </span>
    );
  }
}

export default LuxonUsage;
