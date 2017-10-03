import React, {Component} from 'react';

class TwitchStatus extends Component {
  constructor() {
    super();

    this.state = {
      streaming: null,
      streamCheckURL: 'https://twich-channel-status.herokuapp.com/api/streaming-status'
    };
  }

  componentDidMount() {
    const timeToCheck = 5000;

    setInterval(() => this.getStreamingStatus(), timeToCheck);
  }

  getStreamingStatus() {
    fetch(this.state.streamCheckURL)
      .then(res => res.json())
      .then(data => {
        this.setState({streaming: data.status});
      })
      .catch(err => console.error(err));
  }

  renderTwitchStatus() {
    if(this.state.streaming === null) {
      return (
          <span className="text-warning">checking</span>
          );
    }
    else if(this.state.streaming) {
      return (
          <span className="text-success">online</span>
          );
    } else {
      return (
          <span className="text-danger">offline</span>
          );
    }
  }

  render() {
    return (
        <div className="twitch-status">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="https://www.twitch.tv/brookzerker" target="_blank" rel="noopener noreferrer">Twitch.tv status: {this.renderTwitchStatus()}</a>
            </li>
          </ul>
        </div>
        );
  }
}

export default TwitchStatus;
