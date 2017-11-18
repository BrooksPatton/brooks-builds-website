import React, {Component} from 'react';
import AboutMe from '../about-me/AboutMe';
import LatestStreams from '../latest-streams/LatestStreams';
import Projects from '../projects/Projects';

class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className="col">
                                <AboutMe />
                            </div>
                            </div>
                        <div className="row">
                            <div className="col">
                                <Projects />
                            </div>
                            </div>
                        </div>
                        <div className="col">
                            <LatestStreams videos={this.props.videos} />
                        </div>
                    </div>
                </div>
        )
    }
}

export default Home;