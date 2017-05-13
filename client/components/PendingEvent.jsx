import React from 'react';

class PendingEvent extends React.Component {
  constructor (props) {
    super(props);

    this.state = {}

  }

  render() {
    console.log('pending props', this.props.pending)
    return (
      <div className="thumbnail">
        <div>Name: {this.props.pending.name}</div>
        <div>Date: {this.props.pending.date}</div>
        <div>Detail: <img src={this.props.pending.photo_url}/> </div>
        <button onClick={() => this.props.accept()}>Accept</button><button>Deny</button>
      </div>
    );
  }
}

export default PendingEvent;