import React, {Component} from 'react';
import './Stream.css';

class Stream extends Component {
  generateRecordingMark() {
    if(this.props.video.status === 'recording') {
      return (
        <div className="live-mark">live</div>
      );
    }
  }

  render() {
    return (
      <div className="mb-3 Stream">
        <a href={this.props.video.url}>
          <div className="mx-auto Stream-img">
            {this.generateRecordingMark()}
            <img src={this.props.video.thumbnails[0].url} className="Stream-img" alt={`preview of stream titled ${this.props.video.title}`} />
          </div>
          <p className="stream-title text-center pl-5 pr-5">{this.props.video.title}</p>
        </a>
      </div>
    );
  }
}

export default Stream;
