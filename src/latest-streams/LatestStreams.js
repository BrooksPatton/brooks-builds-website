import React, {Component} from 'react';
import Stream from './Stream';

class LatestStreams extends Component {
  constructor() {
    super();

    this.state = {
      videos: []
    };
  }

  componentDidMount() {
    const url = 'https://wt-5f640d0b3015dcdd63e169cc79dfd2b5-0.run.webtask.io/get-latest-streams';

    fetch(url)
      .then(rawData => rawData.json())
      .then(data => this.setState({videos: data.videos}))
      .catch(err => console.error(err));
  }

  generateStreamTags() {
    return this.state.videos.map(video => (
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
