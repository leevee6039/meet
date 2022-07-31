import React, { Component } from 'react';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
  }

  getStyle = () => {
    return {
      color: this.color
    };
  };

  getClass = () => {
    return this.class;
  };

  render() {
    return (
      <div className={`alert ${this.getClass()}`}>
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

export class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = '#036';
    this.class = 'info-alert';
  }
}

export class WarningAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = '#c60';
    this.class = 'warning-alert';
  }
}

export class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = '#900';
    this.class = 'error-alert';
  }
}
