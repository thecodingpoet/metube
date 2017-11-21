import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY= "AIzaSyCjSf-ZB5h8xf-yeuUZPfg4i9UYlLin9bQ";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('poetry');
  }
 
  videoSearch(term) {
    YTSearch({
      key: API_KEY,
      term,
    }, videos => this.setState({ 
        videos,
        selectedVideo: videos[0],
      })
    );
  }
 
  render() {
    const videoSearch = _.debounce(term => {this.videoSearch(term)}, 300);
    const { videos, selectedVideo } = this.state;
    return (
      <div className="row"> 
          <SearchBar onSearchTermChange={videoSearch} />
          <VideoDetail video={selectedVideo} />
          <VideoList
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            videos={videos} 
          />
      </div> 
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container')); 
  