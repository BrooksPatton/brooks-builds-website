import React, {Component} from 'react';
import Moment from 'react-moment';
import {Redirect} from 'react-router-dom';
import Stream from '../latest-streams/Stream';
import './OneProject.css';
const data = require('./project-list');

class OneProject extends Component {
    constructor() {
        super();

        this.state = {
            project: {},
            videos: [],
            youtubeVideos: [],
            youtubeVideoUrl: 'https://wt-5f640d0b3015dcdd63e169cc79dfd2b5-0.run.webtask.io/get-youtube-videos'
        };
    }

    componentWillMount() {
        const id = Number(this.props.match.params.id);
        
        for(let i = 0; i < data.length; i = i + 1) {
            if(data[i].id === id) {
                this.setState({
                    project: data[i]
                });
                break;
            }
        }
    }

    componentDidMount() {
        const url = `${this.state.youtubeVideoUrl}?title=${this.state.project.youtubePlaylist}`;
        
        if(this.state.youtubeVideos.length === 0) {
            fetch(url)
            .then(res => res.json())
            .then(res => res.items)
            .then(items => items.map(item => ({
                status: 'youtube video',
                url: `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`,
                thumbnails: [item.snippet.thumbnails.default],
                title: item.snippet.title,
                id: item.id
            })))
            .then(videos => this.setState({youtubeVideos: videos}))
            .catch(err => console.error(err));
        }
    }
    
    componentWillReceiveProps(newProps) {
        this.setState({
            videos: this.getRelatedVideos(newProps.videos, this.state.project.hashtag)
        });
    }

    getRelatedVideos(videos, hashtag) {
        return videos.filter(video => -1 !== video.title.indexOf(hashtag));
    }

    generateStreams() {
        return this.state.videos.map(video => (
            <Stream video={video} key={video._id} />
        ));
    }

    generateYoutubeVideos() {
        return this.state.youtubeVideos.map(video => (
            <Stream video={video} key={video.id} />
        ));
    }

    youtubeVideos() {
        if(this.state.youtubeVideos.length > 0) {
            return (
                <div>
                    <div className="row">
                        <div className="col">
                            <h4>YouTube Archives</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="twitch-streams">
                            {this.generateYoutubeVideos()}
                        </div>
                    </div>
                </div>)
        }
    }

    liveStreamArchives() {
        if(this.state.videos.length > 0) {
            return (
                <div>
                    <div className="row">
                        <div className="col">
                            <h4>Live Stream Archives</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="twitch-streams">
                            {this.generateStreams()}
                        </div>
                    </div>
                </div>
            );
        }
    }

    render() {
        if(!this.state.project.title) return (<Redirect to="/" />)

        return (
            <div className="container OneProject">
                <div className="row">
                    <div className="col">
                        <h2 className="text-center">{this.state.project.title}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p><Moment fromNow>{this.state.project.date}</Moment></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p><a href={this.state.project.link} target="_blank" rel="noopener noreferrer">Deployed link</a></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-5">
                        <p>{this.state.project.longDescription}</p>
                    </div>
                </div>
                {this.youtubeVideos()}
                {this.liveStreamArchives()}
            </div>
        );  

        
    }
}

export default OneProject;