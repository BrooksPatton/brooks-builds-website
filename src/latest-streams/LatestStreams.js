import React, {Component} from 'react';
import Stream from './Stream';



class LatestStreams extends Component {
  generateStreamTags() {
    return this.props.videos.map(video => (
      <Stream key={video.broadcast_id} video={video} />
    ));
  }

  render() {
    return (
        <div>
          <h2 className="text-center">Check out my latest streams</h2>
          <div className="row">
            <div className="col">
              {this.generateStreamTags()}
            </div>
          </div>
        </div>
        );
  }
}

export default LatestStreams;
